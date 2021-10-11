import { Configuration, Maliciuos } from '../../database/';
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
			Configuration.findById(member.guild.id),
			Maliciuos.findOne(),
		]);
		if (!promises[0]) return;

		const channel = (await bot.getChannel(promises[0].channel)) as TextChannel;

		if (promises[1].users.includes(member.id)) {
			const banned = await member
				.ban({ reason: lang.reason })
				.catch(() => {
					channel.send(lang.error.replace('%user%', member.user.tag));
				});
			if (!banned) channel.send(member.user.tag + lang.texto).catch(() => null);
		}
	}
}
