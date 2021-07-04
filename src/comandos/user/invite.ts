import { Message, MessageEmbed } from 'discord.js';
import Bot from '../../Bot.js';
import BaseCommand from '../../utils/Structure/Command';
export default class InviteCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('invite', 'user', [], 3)
    }
    async run(bot: Bot, message: Message, args: Array<string>, idioma) {
        const lang = idioma.commands.invite;
        const embed = new MessageEmbed()
        .setAuthor(bot.client.user.username, bot.client.user.avatarURL())
        .setDescription(lang.desc)
        .setColor("RANDOM")
        .setFooter(lang.footer);
        message.channel.send({embed});
    }
}