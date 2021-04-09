import langs from "../model/langs.js";
export async function run(client, message, args, idioma) {
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
    message.channel.send(lang.cambiado)
}

export const help = {
    name: "set-lang",
    desc: "Establece el idioma del bot",
    alias: ["establecer-idioma"],
    onlyDev: false
}