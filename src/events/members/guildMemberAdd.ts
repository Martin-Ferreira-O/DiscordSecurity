import { Registrador, Malicioso } from '../../database/';
import { BaseEvent } from '../../lib';
import Bot from '../../bot';
import { GuildMember, TextChannel } from 'discord.js';
export default class MemberAddEvent extends BaseEvent {
	constructor() {
		super('guildMemberAdd');
	}
	async run(bot: Bot, member: GuildMember): Promise<void> {
		const lang = this.language(member.guild.id);
		const promises = await Promise.all([
			Registrador.findById(member.guild.id),
			Malicioso.findOne(),
		]);
		if (!promises[0]) return;

		const channel = (await bot.client.channels
			.fetch(`${BigInt(promises[0].channel)}`)
			.catch(() => null)) as TextChannel;

		if (promises[1].usuarios.includes(member.id)) {
			const banned = await member
				.ban({ reason: lang.reason })
				.catch(() => {
					channel.send(
						lang.error.replace('%user%', member.user.tag)
					);
				});
			if (!banned)
				channel
					.send(member.user.tag + lang.texto)
					.catch(() => null);
		} else return;
	}
}
