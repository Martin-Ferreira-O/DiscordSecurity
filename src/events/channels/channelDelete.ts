const cooldown = new Map();
import { Configuration, Channel } from '../../database/';
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

		const configuration = await Configuration.findById(channel.guildId);
		if (!configuration) return;

		const { entries } = await channel.guild.fetchAuditLogs({
			limit: 1,
			type: 'CHANNEL_DELETE',
		});

		const deletionLog = entries?.first();
		if (!deletionLog) return;

		const channelReports = (await bot.getChannel(
			configuration.channel
		)) as TextChannel;
		const { executor } = deletionLog;

		const searchProtected = await Channel.findById(channel.guildId);

		if (searchProtected && searchProtected.channel.includes(channel.id)) {
			if (channel.guild.ownerId === executor.id) return;
			
			const newChannel = await createChannel(channel, lang); // Creamos el canal denuevo;
			await Promise.all([
				channel.guild.members.ban(executor.id),
				sendMessages(newChannel, channel),
				changeChannel(channel, newChannel),
			]);
			
			if (channelReports)
				channelReports.send(executor.tag + ' ' + lang.protegido);
			return;
		} else {
			if (
				configuration.users.includes(executor.id) ||
				executor.id === channel.guild.ownerId
			)
				return; // Si no existen los canales protegidos y los autores no fueron los de la lista se seguira el proceso
		} // Si es que existen canales protegidos

		if (configuration.extrem) {
			await channel.guild.members.ban(executor.id, {
				days: 7,
				reason: lang.reasonBan,
			});
			if (channelReports)
				channelReports.send(
					lang.reportChannelXtreme.replace('%user%', executor.tag)
				);
			await createChannel(channel, lang);
		} else {
			// Verifing the cooldown
			if (!cooldown.has(executor.id)) {
				cooldown.set(executor.id, 10);
			} else if (cooldown.get(executor.id) >= 20) {
				channel.guild.members.ban(executor.id, {
					days: 7,
					reason: lang.reasonBan,
				});
				if (channelReports)
					channelReports.send(
						lang.reportChannel.replace('%user%', executor.tag)
					);
			} else {
				const n = cooldown.get(executor.id);
				cooldown.set(executor.id, n + 10);
			}
			if (cooldown.has(executor.id)) {
				setTimeout(() => cooldown.delete(executor.id), 20_000);
			}
		}
	}
}
