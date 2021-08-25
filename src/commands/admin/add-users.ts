import { Registrador } from '../../database/';
import { CommandBase } from '../../lib';
import { Message } from 'discord.js';
import Bot from '../../bot';
export default class AddUser extends CommandBase {
	constructor() {
		// Name, Category, alias, cooldown
		super('adduser', 'Admin', ['añadir-usuarios', 'add-user'], 15);
	}
	async run(
		bot: Bot,
		message: Message,
		args: Array<string>
	): Promise<void | Message> {
		if (message.author.id !== message.guild.ownerId)
			return message.channel.send(bot.language.global.onlyOwner);
		const lang = bot.language.commands.addUsers;
		const search = await Registrador.findById(message.guild.id);
		if (!search) return message.channel.send(bot.language.global.noSearch);
		const user =
			message.mentions.users.first() ||
			bot.client.users.cache.get(`${BigInt(args[0])}`) ||
			(await bot.client.users
				.fetch(`${BigInt(args[0])}`)
				.catch(() => null));
		if (!user) return message.channel.send(lang.noValido);
		if (search.users.includes(user.id))
			return message.channel.send(lang.yaEsta);
		await Registrador.findByIdAndUpdate(message.guild.id, {
			$push: { users: user.id },
		});
		message.channel.send(lang.agregado + user.tag);
	}
}
