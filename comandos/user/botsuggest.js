import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;
import BaseCommand from '../../utils/Structure/Command';
export default class BotSuggestCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('botsuggest', 'user', ["bot-suggest", "sugerir"], 15)
    }
    async run(client, message, args, idioma) {
        const lang = idioma.commands.suggest;
        const suggest = args.join(" ");
        if (!suggest) return message.channel.send(lang.noSuggest);
        if (suggest.length >= 2048) return message.channel.send(lang.limit);
        if (message.attachments.first()) image = message.attachments.first().url;
        else image = false;
        const channel = await client.channels.fetch(process.env.SUGERENCIAS).catch(err => {});
        if (!channel) return;
        const embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(suggest).setColor(0xffa5b5).setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }))
        if (image) embed.setImage(image);
        channel.send(embed);
        message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(lang.description).setFooter(0xffa5b5))
    }
}