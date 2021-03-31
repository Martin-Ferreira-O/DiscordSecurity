import langs from "../model/langs.js";
export async function run(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Ocupas admin');
    if (!args[0]) return message.channel.send("Debes ingresar entre `EN - ES`")
    if (args[0].toLowerCase() !== "en" && args[0].toLowerCase() !== "es") return message.channel.send("Debes ingresar entre `EN - ES`")
    const lang = args[0].toLowerCase()
    const searchLangs = await langs.findOne({ guildId: message.guild.id });
    const nuevo = {
        guildId: message.guild.id,
        lang: lang
    };

    searchLangs ? await searchLangs.updateOne({ lang: lang }) : await langs.create(nuevo);
    message.channel.send('Idioma cambio')
}

export const help = {
    name: "set-lang",
    desc: "Establece el idioma del bot",
    alias: []
}