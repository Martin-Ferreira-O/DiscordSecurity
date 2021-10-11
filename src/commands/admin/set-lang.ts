import { Langs } from '../../database/';
import { CommandBase } from '../../lib';
import Bot from '../../bot';
import { Message } from 'discord.js';

export default class SetLangCommand extends CommandBase {
	constructor() {
		super('set-lang', 'admin', ['establecer-idioma'], 5);
	}
	async run(bot: Bot, message: Message, args: Array<string>) {
		const lang = this.language(message.guildId);
		if (!message.member.permissions.has('ADMINISTRATOR'))
			return message.channel.send(lang.noPerms);

		if (!args[0] || !['en', 'es'].includes(args[0].toLowerCase()))
			return message.channel.send(lang.noArgs);

		const selected = args[0].toLowerCase();
		const searchLangs = await Langs.findById(message.guildId);

		if (searchLangs && searchLangs.lang === selected)
			return message.channel.send(lang.selected);
		searchLangs
			? await searchLangs.updateOne({ lang: selected })
			: await Langs.create({ _id: message.guildId, lang: selected });
		message.channel.send(lang.cambiado);
		
	}
}
