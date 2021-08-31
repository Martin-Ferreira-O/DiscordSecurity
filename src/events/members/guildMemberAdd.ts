import { Registrador, Malicioso, Langs } from '../../database/';
import { BaseEvent } from '../../lib';
import Bot from '../../bot';
import { GuildMember, TextChannel } from 'discord.js';
export default class MemberAddEvent extends BaseEvent {
	constructor() {
		super('guildMemberAdd');
	}
	async run(bot: Bot, member: GuildMember): Promise<void> {
		let idioma;
		const querisMongo = await Promise.all([
			Registrador.findById(member.guild.id),
			Malicioso.findOne(),
		]);
		if (!querisMongo[0]) return;

		const lenguaje = idioma.events.memberAdd;
		const channel = (await bot.client.channels
			.fetch(`${BigInt(querisMongo[0].channel)}`)
			.catch(() => null)) as TextChannel;
		if (querisMongo[1].usuarios.includes(member.id)) {
			const banned = await member
				.ban({ reason: lenguaje.reason })
				.catch(() => {
					channel.send(
						lenguaje.error.replace('%user%', member.user.tag)
					);
				});
			if (!banned)
				channel
					.send(member.user.tag + lenguaje.texto)
					.catch(() => null);
		} else return;
	}
}
