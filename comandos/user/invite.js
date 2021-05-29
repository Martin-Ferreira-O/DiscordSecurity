import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;
import BaseCommand from '../../utils/Structure/Command';
export default class InviteCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('invite', 'user', [], 3)
    }
    async run(client, message, args, idioma) {
        const lang = idioma.commands.invite;
        message.channel.send(new MessageEmbed().setAuthor(client.user.username, client.user.avatarURL()).setDescription(lang.desc).setColor("RANDOM").setFooter(lang.footer));
    }
}