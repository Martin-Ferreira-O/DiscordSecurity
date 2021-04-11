import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;

export async function run(client, message, args, idioma) {
    const lenguaje = idioma.commands.help;
    client.comandos.map(cmd => cmd.help.name)
    const user = client.comandos.filter(cmd => cmd.help.category == 'user').map(cmd => cmd.help.name)
    const admin = client.comandos.filter(cmd => cmd.help.category == 'admin').map(cmd => cmd.help.name)
    const dev = client.comandos.filter(cmd => cmd.help.category == 'dev').map(cmd => cmd.help.name)
    const embed = new MessageEmbed()
        .setDescription(lenguaje.desc)
        .addFields([{
                name: "User",
                value: user.join("\n"),
                inline: true
            },
            {
                name: '\u200b',
                value: '\u200b',
                inline: true
            },
            {
                name: "Admin",
                value: admin.join("\n"),
                inline: true
            }
        ])
        .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
        .setFooter(message.member.displayName, message.author.avatarURL({ dynamic: true }));
    if (message.author.id == process.env.DEV) embed.addField('DEV', dev.join("\n"), true);
    message.channel.send(embed)
}

export const help = {
    name: "Help",
    alias: [],
    onlyDev: false,
    category: 'user'
}