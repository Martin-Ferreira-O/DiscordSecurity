import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;
export async function run(client, message, args, idioma) {
    const lang = idioma.commands.invite;
    message.channel.send(new MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setDescription(lang.desc).setColor("RANDOM").setFooter(lang.footer));
}
export const help = {
    name: "Invite",
    desc: "Invita al bot en tu servidor",
    alias: [],
    onlyDev: false,
    category: 'user'
}