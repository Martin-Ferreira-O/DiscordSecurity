import { Message, TextChannel } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import Bot from '../../bot';
import BaseCommand from '../../utils/Structure/command';
export default class BotSuggestCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('botsuggest', 'user', ["bot-suggest", "sugerir"], 15)
    }
    async run(bot: Bot, message: Message, args: Array<string>, idioma) {
        const lang = idioma.commands.suggest;
        const suggest = args.join(" ");
        if (!suggest) return message.channel.send(lang.noSuggest);
        if (suggest.length >= 2048) return message.channel.send(lang.limit);
        let image: string | null;
        if (message.attachments.first()) image = message.attachments.first().url;
        else image = null;

        const channel: void | TextChannel = await bot.client.channels.fetch(`${BigInt(process.env.SUGERENCIAS)}`).catch(() => null);
        
        if (!channel) return;
        const embed = new MessageEmbed()
            .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
            .setDescription(suggest)
            .setColor(0xffa5b5)
            .setFooter(message.author.tag, message.author.avatarURL({ dynamic: true }));
        if (image) embed.setImage(image);
        channel.send({embeds: [embed]});
        const sended = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(lang.description).setFooter(0xffa5b5);
        message.channel.send({embeds: [sended]});
    }
}