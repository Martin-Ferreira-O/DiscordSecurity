import { MessageEmbed } from "discord.js"

export async function run(client, message, args) {
    const embed = new MessageEmbed()
        .setDescription("Mis comandos solo funcionaran si tengo permiso de administrador")
    message.channel.send(embed)
}