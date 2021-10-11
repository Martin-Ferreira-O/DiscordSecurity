import { Configuration } from '../../database/';
import { CommandBase } from '../../lib';
import { Message } from 'discord.js';
import Bot from '../../bot';

export default class AddUser extends CommandBase {
	constructor() {
		super('adduser', 'admin', ['añadir-usuarios', 'add-user'], 15);
	}

	async run(
		bot: Bot,
		message: Message,
		args: Array<string>
	): Promise<void | Message> {
	
		const lang = this.language(message.guildId);
		if (message.author.id !== message.guild.ownerId) return message.channel.send(lang.onlyOwner);
		
		const search = await Configuration.findById(message.guildId);
		if (!search) return message.channel.send(lang.noSearch);
		
		const user = message.mentions.users.first() || await bot.getUser(args[0]);
		if (!user) return message.channel.send(lang.noValido);

		if (search.users.includes(user.id)) return message.channel.send(lang.yaEsta);
		
		await Configuration.findByIdAndUpdate(message.guildId, {
			$push: { users: user.id },
		});
		message.channel.send(lang.agregado + user.tag);
	}
}
