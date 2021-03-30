import langs from "../model/langs";
export async function run(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Ocupas admin');

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