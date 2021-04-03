import { MessageEmbed } from "discord.js"

export async function run(client, message, args) {
    const embed = new MessageEmbed()
        .setDescription("add-users\ndelete-users\nhelp\nset-lang\nsetup\nver-usuarios")
    message.channel.send(embed)
}

export const help = {
    name: "Help",
    alias: [],
    onlyDev: false
}