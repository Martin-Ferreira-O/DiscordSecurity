import Discord from 'discord.js-light';
export async function run(client, message, args, idioma) {
    const lang = idioma.commands.suggest;
    const suggest = args.join(" ");
    if (!suggest) return message.channel.send(lang.noSuggest);
    if (suggest.length >= 2048) return message.channel.send(lang.limit);
    if (message.attachments.first()) image = message.attachments.first().url;
    else image = false;
    const channel = await client.channels.fetch(process.env.SUGERENCIAS).catch(err => {});
    if (!channel) return;
    channel.send(new Discord.MessageEmbed().setAuthor(lang.message + message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(lang.ready));
    message.channel.send(new Discord.MessageEmbed().setAuthor(lang.message + message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(lang.description).setFooter(0x33333))
}

export const help = {
    name: "BotSuggest",
    desc: "Añade sugerencias al bot.",
    alias: ["bot-suggest", "sugerir"],
    onlyDev: false,
    category: 'admin'
}