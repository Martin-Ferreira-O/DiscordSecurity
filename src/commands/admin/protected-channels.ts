import Bot from '../../bot';
import { GuildChannel, Message, TextChannel } from 'discord.js';
import { Channel } from '../../database/';
import { CommandBase } from '../../lib';
export default class PTCCommand extends CommandBase {
	constructor() {
		// Name, Category, alias, cooldown
		super('protected-channels', 'Admin', ['canales-protegidos', 'ptc'], 5);
	}
	async run(bot: Bot, message: Message, args: string[]) {
		const lang = bot.language.commands.protected;
		if (message.author.id != message.guild.ownerId)
			return message.channel.send(lang.noPerms);
		if (!args[0]) return message.channel.send(lang.removeAdd);
		const channel: GuildChannel | TextChannel =
			(message.mentions.channels.first() as TextChannel | GuildChannel) ||
			(message.guild.channels.cache.get(`${BigInt(args[1])}`) as
				| TextChannel
				| GuildChannel);
		const searchChannel = await Channel.findById(message.guild.id);
		if (['remove', 'remover'].includes(args[0].toLowerCase())) {
			if (!searchChannel) return message.reply(lang.noCanales);
			const indice = searchChannel.channel.indexOf(args[1]);
			if (indice === -1) return message.channel.send(lang.noFound);
			searchChannel.channel.splice(indice, 1);
			await searchChannel.save();
			message.channel.send(lang.removeExitoso);
		} else if (['add', 'añadir'].includes(args[0].toLowerCase())) {
			if (!channel) return message.channel.send(lang.noCanal);
			if (channel.guild.id !== message.guild.id)
				return message.channel.send(lang.noCanal);
			if (!searchChannel) {
				const newChannel = new Channel({
					_id: message.guild.id,
					channel: channel.id,
				});
				await newChannel.save();
			} else {
				if (searchChannel.channel.length >= 3)
					return message.channel.send(lang.no3Mas);
				if (searchChannel.channel.includes(channel.id))
					return message.channel.send(lang.yaEsta);
				await searchChannel.updateOne({
					$push: { channel: channel.id },
				});
			}
			message.channel.send(channel.toString() + lang.establecido);
		} else if (['view', 'ver'].includes(args[0].toLowerCase())) {
			if (!searchChannel)
				return message.channel.send('No existen los canales');
			message.channel.send(
				searchChannel.channel.map((v) => '<#' + v + '>').join(' ')
			);
		} else message.channel.send(lang.removeAdd);
	}
}
