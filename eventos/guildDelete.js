import pkg from "discord.js-light";
const { MessageEmbed } = pkg;
export default async(client, guild) => {
    const dueño = await client.users.fetch(guild.ownerID);
    const embed = new MessageEmbed()
        .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
        .setDescription("Me eliminaron a un nuevo servidor, aca puedes obtener mas información al respecto")
        .addFields([{
            name: "Miembros",
            value: guild.memberCount,
            inline: true
        }, {
            name: "Dueño",
            value: dueño.id + " " + dueño.tag,
            inline: true
        }])
        .setColor("RED")
        .setThumbnail(guild.iconURL({ dynamic: true }))
    const channel = await client.channels.fetch("734207834866188300").catch(err => {})
    if (channel) channel.send(embed)
}