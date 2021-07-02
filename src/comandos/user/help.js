import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;
import BaseCommand from '../../utils/Structure/Command.js';
export default class HelpCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('help', 'user', ['comandos', 'ayuda'], 3)
    }
    async run(client, message, args, idioma) {
        const lang = idioma.commands.help;
        const embed = new MessageEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(message.member.displayHexColor);
        if (!args.length) {
            const user = bot.client.commands.array().filter(v => v.category === 'user');
            const admin = bot.client.commands.array().filter(v => v.category === 'Admin');
            embed.setDescription()
            embed.addFields({
                name: "User",
                value: `\`${user.map(value => value.name).join(" ")}\``
            }, {
                name: "Admin",
                value: `\`${admin.map(value => value.name).join(" ")}\``
            });
            return message.reply(embed);
        }
        const command = bot.client.commands.get(args[0]);
        if (command) {
            embed.setDescription(lang.commandInfo.replace("%command%", command.name));
            embed.addFields({
                name: "Name",
                value: command.name
            }, {
                name: "Aliases",
                value: `\`${command.alias.join(", ")}\``
            }, {
                name: "Cooldown",
                value: command.cooldown || "0"
            });
            return message.reply(embed);
        }
        embed.setDescription(lang.commandNotFound.replace("%command%", args[0]));
        return message.channel.send(embed)
    }
}