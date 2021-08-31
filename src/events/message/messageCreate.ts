import {
	Message,
	MessageEmbed,
	NewsChannel,
	TextChannel,
	ThreadChannel,
} from 'discord.js';
const prefix = 'd!';
import { BaseEvent } from '../../lib';
import Bot from '../../bot';
export default class MessageEvent extends BaseEvent {
	constructor() {
		super('messageCreate');
	}
	async run(bot: Bot, message: Message): Promise<void | Message> {
		if (message.author.bot) return;
		if (
			message.guild &&
			!(message.channel as TextChannel | NewsChannel | ThreadChannel)
				.permissionsFor(bot.client.user.id)
				.has('SEND_MESSAGES')
		)
			return;

		if (
			message.content.match(
				new RegExp(`^<@!?${bot.client.user.id}>( |)$`)
			)
		) {
			const embed = new MessageEmbed()
				.setColor('RANDOM')
				.setDescription(
					bot.lang.get(message.guildId).events.message.prefix
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
		if (!message.content.toLowerCase().startsWith(prefix.toLowerCase()))
			return;
		const args = message.content
			.substring(prefix.length)
			.trim()
			.split(/ +/g);
		const command = args.shift().toLowerCase();
		if (command.length === 0) return;

		// Obtenemos los comandos desde el cache
		const cmd = bot.commands.get(command);
		if (cmd) {
			if (
				!message.guild.me.permissions.has([
					'BAN_MEMBERS',
					'VIEW_AUDIT_LOG',
					'MANAGE_CHANNELS',
				])
			)
				return message.channel.send(
					bot.lang.get(message.guildId).events.message.noPerms
				);
			if (
				cmd.category === 'dev' &&
				message.author.id !== process.env.DEVELOPER
			)
				return;
			await cmd.run(bot, message, args);
		}
	}
}
