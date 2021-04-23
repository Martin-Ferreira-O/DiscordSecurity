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
    const embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(suggest).setColor(0xffa5b5).setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
    if (image) embed.setImage(image);
    channel.send(embed);
    message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(lang.description).setFooter(0xffa5b5))
}

export const help = {
    name: "BotSuggest",
    desc: "Añade sugerencias al bot.",
    alias: ["bot-suggest", "sugerir"],
    onlyDev: false,
    category: 'user'
}