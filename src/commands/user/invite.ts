import { Message, MessageEmbed } from 'discord.js';
import Bot from '../../bot.js';
import { CommandBase } from '../../lib';

export default class InviteCommand extends CommandBase {
	constructor() {
		super('invite', 'user', [], 3);
	}
	async run(bot: Bot, message: Message, args: Array<string>) {

		const lang = this.language(message.guildId);
		const embed = new MessageEmbed()
			.setAuthor(bot.client.user.username, bot.client.user.avatarURL())
			.setDescription(lang.desc)
			.setColor('RANDOM')
			.setFooter(lang.footer);
		message.channel.send({ embeds: [embed] });
	}
}
