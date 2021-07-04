import {Langs} from "../../database/model/index";
import espanol from '../../lang/espanol';
import ingles from '../../lang/english';
import BaseCommand from '../../utils/Structure/Command';
import Bot from "../../Bot.js";
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

        const seleccionar = args[0].toLowerCase()
        const searchLangs = await Langs.findById(message.guild.id);

        if (searchLangs && searchLangs.lang === seleccionar) return message.channel.send(lang.selected);

        searchLangs ? await searchLangs.updateOne({ lang: seleccionar }) : await Langs.create({ guildId: message.guild.id, lang: seleccionar });
        message.channel.send(lang.cambiado);

        let cacheIdioma;
        searchLangs.lang == 'en' ? cacheIdioma = espanol : cacheIdioma = ingles;
        bot.langCache.set(message.guild.id, cacheIdioma);
    }
}