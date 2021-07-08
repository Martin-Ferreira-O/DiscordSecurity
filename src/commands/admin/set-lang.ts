import {Langs} from "../../database/model/index";
import spanish from '../../lang/espanol';
import english from '../../lang/english';
import BaseCommand from '../../utils/Structure/command';
import Bot from "../../bot.js";
import { Message } from "discord.js";
export default class SetLangCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('set-lang', 'Admin', ["establecer-idioma"], 5)
    }
    async run(bot: Bot, message: Message, args: Array<string>, idioma) {
        const lang = idioma.commands.setLang;
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(idioma.global.noPerms);
        if (!args[0] || !["en", "es"].includes(args[0].toLowerCase())) return message.channel.send(lang.noArgs);

        const selected = args[0].toLowerCase()
        const searchLangs = await Langs.findById(message.guild.id);

        if (searchLangs && searchLangs.lang === selected) return message.channel.send(lang.selected);

        searchLangs ? await searchLangs.updateOne({ lang: selected }) : await Langs.create({ _id: message.guild.id, lang: selected });
        message.channel.send(lang.cambiado);

        let cacheLang;
        if (selected === 'es') cacheLang = spanish; else cacheLang = english;
        bot.langCache.set(message.guild.id, cacheLang);
    }
}