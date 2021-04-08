import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;

export async function run(client, message, args) {
    const embed = new MessageEmbed()
        .setDescription(client.comandos.map(cmd => cmd.help.name))
        .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
        .setFooter(message.member.displayName, message.author.avatarURL({ dynamic: true }));
    message.channel.send(embed)
}

export const help = {
    name: "Help",
    alias: [],
    onlyDev: false
}