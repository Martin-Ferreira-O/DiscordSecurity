import {
	Message,
	MessageEmbed,
	NewsChannel,
	TextChannel,
	ThreadChannel,
} from 'discord.js';
import { BaseEvent } from '../../lib';
import Bot from '../../bot';

const prefix = 'd!';

export default class MessageEvent extends BaseEvent {
	constructor() {
		super('messageCreate');
	}

	async run(bot: Bot, message: Message): Promise<void | Message> {

		if (message.author.bot || message.guild && !(message.channel as TextChannel | NewsChannel | ThreadChannel).permissionsFor(bot.client.user.id).has('SEND_MESSAGES')) return;
		
		const lang = this.language(message.guildId);
		
		if (message.content.match(new RegExp(`^<@!?${bot.client.user.id}>( |)$`))) {
			const embed = new MessageEmbed()
				.setColor('RANDOM')
				.setDescription(
					lang.prefix
				)
				.setAuthor(
					message.member.displayName,
					message.author.avatarURL()
				)
				.setFooter(
					message.guild.name,
					message.guild.iconURL({ dynamic: true })
				);
			message.channel.send({ embeds: [embed] });
		}

		if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
		const args = message.content
			.substring(prefix.length)
			.trim()
			.split(/ +/g);
		const command = args.shift().toLowerCase();
		if (command.length === 0) return;

		const cmd = bot.commands.get(command);
		if (cmd) {
			if (!message.guild.me.permissions.has([
					'BAN_MEMBERS',
					'VIEW_AUDIT_LOG',
					'MANAGE_CHANNELS',
				])) return message.channel.send(lang.noPerms);
			
			if (cmd.category === 'dev' && message.author.id !== process.env.DEVELOPER) return;
			await cmd.run(bot, message, args);
		}
	}
}
