import langs from "../../database/model/langs.js";
import espanol from '../../lang/espanol.js';
import ingles from '../../lang/english.js';
import BaseCommand from '../../utils/Structure/Command.js';
export default class SetLangCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('set-lang', 'Admin', ["establecer-idioma"], 5)
    }
    async run(client, message, args, idioma) {
        const lang = idioma.commands.setLang;
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(idioma.global.noPerms);
        if (!args[0]) return message.channel.send(lang.noArgs)
        if (!["en", "es"].includes(args[0].toLowerCase())) return message.channel.send(lang.noArgs)
        const seleccionar = args[0].toLowerCase()
        const searchLangs = await langs.findOne({ guildId: message.guild.id });

        if (searchLangs) {
            if (searchLangs.lang == seleccionar) return message.channel.send(lang.selected)
        }
        searchLangs ? await searchLangs.updateOne({ lang: seleccionar }) : await langs.create({ guildId: message.guild.id, lang: seleccionar });
        message.channel.send(lang.cambiado);
        let cacheIdioma;
        searchLangs.lang == 'en' ? cacheIdioma = espanol : cacheIdioma = ingles;
        if (!bot.client.idiomasCache.has(message.guild.id))
            bot.client.idiomasCache.set(message.guild.id, cacheIdioma);
        else {
            bot.client.idiomasCache.delete(message.guild.id);
            bot.client.idiomasCache.set(message.guild.id, cacheIdioma);
        }
        // Guardamos el nuevo idioma en el cache para evitar querys demas en la db
    }
}