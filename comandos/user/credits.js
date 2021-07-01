import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;

import BaseCommand from '../../utils/Structure/Command.js';
export default class CreditsCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('credits', 'user', ['creditos'], 3)
    }
    async run(client, message, args, idioma) {
        const lang = idioma.commands.credits;
        message.channel.send(
            new MessageEmbed()
            .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
            .setDescription(lang.desc)
            .setColor("RANDOM")
            .setFooter(lang.footer)
        );
    }
}