import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;

export async function run(client, message, args, idioma) {
    const lang = idioma.commands.credits;
    message.channel.send(
        new MessageEmbed()
        .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
        .setDescription(lang.desc)
        .setColor("RANDOM")
        .setFooter(lang.footer)
    );
}

export const help = {
    name: "Credits",
    desc: "Mira los creditos de los desarrolladores del bot y sus ayudantes.",
    alias: ['creditos'],
    onlyDev: false,
    category: 'user'
}