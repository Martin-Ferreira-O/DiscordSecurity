import pkg from "discord.js-light";
const { MessageEmbed } = pkg;
import registrador from "../model/registrador.js";
export async function run(client, message, args, idioma) {
    const lang = idioma.commands.verUsuarios;
    const search = await registrador.findOne({ guildId: message.guild.id });
    if (!search) return message.channel.send(idioma.global.noSearch)

    let arrayUsuarios = [];
    if (search.users.length <= 0) return message.channel.send(lang.noUsuario)
    for (let i = 0; i < search.users.length; i++) {
        const user = await client.users.fetch(search.users[i]);
        arrayUsuarios.push("#" + (i + 1) + " " + user.tag)
    }
    message.channel.send(new MessageEmbed().setDescription(arrayUsuarios.join("\n")).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })))
}


export const help = {
    name: "Ver-usuarios",
    desc: "Muestra a los usuarios que estan en la lista blanca",
    alias: ["whitelist-view", "white-list-view"],
    category: 'admin'
}