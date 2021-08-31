const coleccion = new Map();
import { Registrador, Channel } from '../../database/';
import {
	changeChannel,
	createChannel,
	sendMessages,
	BaseEvent,
} from '../../lib';
import Bot from '../../bot';
import { GuildChannel, TextChannel } from 'discord.js';
export default class DeleteChannelEvent extends BaseEvent {
	constructor() {
		super('channelDelete');
	}
	async run(bot: Bot, channel: GuildChannel): Promise<void> {
		const lang = this.language(channel.guildId);
		if (
			!channel.guild.me.permissions.has(['BAN_MEMBERS', 'VIEW_AUDIT_LOG'])
		)
			return;

		const search = await Registrador.findById(channel.guild.id);
		if (!search) return;

		const fetchedLogs = await channel.guild.fetchAuditLogs({
			limit: 1,
			type: 'CHANNEL_DELETE',
		});

		const deletionLog = fetchedLogs.entries.first();
		if (!deletionLog) return;
		const canalReportes = (await bot.client.channels
			.fetch(`${BigInt(search.channel)}`)
			.catch(() => null)) as TextChannel;
		const { executor } = deletionLog;
		let comprobacion = false;
		const searchProtected = await Channel.findOne({
			guildId: channel.guild.id,
		});
		if (searchProtected && searchProtected.channel.includes(channel.id))
			comprobacion = true;

		if (!comprobacion) {
			if (
				search.users.includes(executor.id) ||
				executor.id === channel.guild.ownerId
			)
				return; // Si no existen los canales protegidos y los autores no fueron los de la lista se seguira el proceso
		} else {
			if (channel.guild.ownerId === executor.id) return;
			const newChannel = await createChannel(channel, lang); // Creamos el canal denuevo;
			await Promise.all([
				channel.guild.members.ban(executor.id),
				sendMessages(newChannel, channel),
				changeChannel(channel, newChannel),
			]);
			if (canalReportes)
				canalReportes.send(executor.tag + ' ' + lang.protegido);
			return;
		} // Si es que existen canales protegidos

		if (search.extrem) {
			await channel.guild.members.ban(executor.id, {
				days: 7,
				reason: lang.reasonBan,
			});
			if (canalReportes)
				canalReportes.send(
					lang.reportChannel1 +
						executor.tag +
						lang.reportChannel2Xtreme
				);
			await createChannel(channel, lang);
		} else {
			if (!coleccion.has(executor.id)) {
				coleccion.set(executor.id, 10);
			} else if (coleccion.get(executor.id) >= 20) {
				channel.guild.members.ban(executor.id, {
					days: 7,
					reason: lang.reasonBan,
				});
				if (canalReportes)
					canalReportes.send(
						lang.reportChannel1 + executor.tag + lang.reportChannel2
					);
			} else {
				const n = coleccion.get(executor.id);
				coleccion.set(executor.id, n + 10);
			}
			setTimeout(() => {
				if (coleccion.has(executor.id)) coleccion.delete(executor.id);
			}, 20 * 1000); // Si borra 3 canales en menos de 20 segundos se va baneado :D
		}
	}
}
