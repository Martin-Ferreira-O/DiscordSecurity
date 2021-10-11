import { Message, MessageEmbed } from 'discord.js';
import Bot from '../../bot';
import { Configuration } from '../../database/';
import { CommandBase } from '../../lib';

export default class ViewUsers extends CommandBase {
	constructor() {
		super(
			'ver-usuarios',
			'admin',
			['whitelist-view', 'white-list-view', 'view-users'],
			300
		);
	}
	async run(bot: Bot, message: Message) {

		const lang = this.language(message.guildId);
		const search = await Configuration.findById(message.guildId);
		if (!search) return message.channel.send(lang.noSearch);

		const users: string[] = [];
		
		if (search.users.length <= 0)return message.channel.send(lang.noUsuario);
		
		for (let i = 0; i < search.users.length; i++) {
			const user = await bot.client.users.fetch(`${search.users[i]}`);
			users.push(`#${i + 1} ${user.tag}`);
		}

		const embed = new MessageEmbed()
			.setDescription(users.join('\n'))
			.setAuthor(
				message.member.displayName,
				message.author.avatarURL({ dynamic: true })
			);
		message.channel.send({ embeds: [embed] });
	}
}
