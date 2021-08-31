import { Message, User } from 'discord.js';
import Bot from '../../bot';
import { Registrador } from '../../database/';
import { CommandBase } from '../../lib';
export default class DeleteUsersCommand extends CommandBase {
	constructor() {
		// Name, Category, alias, cooldown
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
		if (message.author.id !== message.guild.ownerId)
			return message.channel.send(lang.onlyOwner);
		const search = await Registrador.findById(message.guildId);
		if (!search) return message.channel.send(lang.noSearch);
		if (!args[0]) return message.channel.send(lang.ingresarId);
		const userRemove: User | void = await bot.client.users
			.fetch(`${BigInt(args[0])}`)
			.catch(() => null);
		if (!userRemove) return message.channel.send(lang.idValida);
		const usersArr = search.users;
		if (usersArr.length <= 0) return message.channel.send(lang.noUsers);
		if (!usersArr.includes(userRemove.id))
			return message.channel.send(lang.noEncontrado);
		else usersArr.splice(usersArr.indexOf(userRemove.id), 1);
		await Registrador.findByIdAndUpdate(message.guildId, {
			users: usersArr,
		});
		message.channel.send(userRemove.tag + lang.sacado);
	}
}
