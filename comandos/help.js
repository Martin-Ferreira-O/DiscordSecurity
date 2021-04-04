import { MessageEmbed } from "discord.js"

export async function run(client, message, args) {
    const embed = new MessageEmbed()
        .setDescription(client.comandos.map(comando => comando.help.name))
        .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
        .setFooter("Mis comandos en total");
    message.channel.send(embed)
}

export const help = {
    name: "Help",
    alias: [],
    onlyDev: false
}