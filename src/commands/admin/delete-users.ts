import { Message, User } from 'discord.js';
import Bot from '../../bot';
import { Configuration } from '../../database/';
import { CommandBase } from '../../lib';

export default class DeleteUsersCommand extends CommandBase {
	constructor() {
		super(
			'delete-users',
			'admin',
			['delete-user', 'borrar-usuarios', 'unwhitelist'],
			15
		);
	}
	async run(
		bot: Bot,
		message: Message,
		args: string[]
	): Promise<void | Message> {

		const lang = this.language(message.guildId);
		if (message.author.id !== message.guild.ownerId) return message.channel.send(lang.onlyOwner);
		
		const search = await Configuration.findById(message.guildId);
		if (!search) return message.channel.send(lang.noSearch);
		if (!args[0]) return message.channel.send(lang.ingresarId);
		
		const userRemove = await bot.getUser(args[0]);
		if (!userRemove) return message.channel.send(lang.idValida);
		
		const usersArr = search.users;
		if (!usersArr.length) return message.channel.send(lang.noUsers);
				
		if (usersArr.includes(userRemove.id)) {
			
			usersArr.splice(usersArr.indexOf(userRemove.id), 1);	
			await Configuration.findByIdAndUpdate(message.guildId, {
				users: usersArr,
			});

			message.channel.send(userRemove.tag + lang.sacado);
		} else {
			message.channel.send(lang.noEncontrado);
		}
	}
}
