import { Message, MessageEmbed } from 'discord.js';
import Bot from '../../bot.js';
import { CommandBase } from '../../lib';
export default class HelpCommand extends CommandBase {
    constructor() {
        // Name, Category, alias, cooldown
        super('help', 'user', ['comandos', 'ayuda'], 3)
    }
    async run(bot: Bot, message: Message, args: Array<string>) {
        const lang = bot.language.commands.help;
        const embed = new MessageEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(message.member.displayHexColor);
        if (!args.length) {
            const user = bot.commands.array().filter(v => v.category === 'user');
            const admin = bot.commands.array().filter(v => v.category === 'Admin');
            embed.addFields({
                name: "User",
                value: `\`${user.map(value => value.name).join(", ")}\``
            }, {
                name: "Admin",
                value: `\`${admin.map(value => value.name).join(", ")}\``
            });
            return message.reply({embeds: [embed]});
        }
        const command = bot.commands.get(args[0]);
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
            return message.reply({embeds: [embed]});
        }
        embed.setDescription(lang.commandNotFound.replace("%command%", args[0]));
        return message.reply({embeds: [embed]});
    }
}