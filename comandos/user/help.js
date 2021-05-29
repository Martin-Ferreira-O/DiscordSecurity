import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;
import BaseCommand from '../../utils/Structure/Command';
export default class HelpCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('help', 'user', ['comandos', 'ayuda'], 3)
    }
    async run(client, message, args, idioma) {
        let user = '';
        let admin = '';
        let dev = '';
        for (let cmd of client.comandos.array()) {
            if (cmd.help.category == 'user') {
                user += cmd.help.name + ' [`' + cmd.help.alias.join(", ") + '`]\n'
            } else if (cmd.help.category == 'admin') {
                admin += cmd.help.name + ' [`' + cmd.help.alias.join(", ") + '`]\n'
            } else {
                dev += cmd.help.name + ' [`' + cmd.help.alias.join(", ") + '`]\n'
            }
        }
        const embed = new MessageEmbed()
            .setDescription(idioma.commands.help.desc)
            .addFields([{
                    name: "User",
                    value: user,
                    inline: true
                },
                {
                    name: "Admin",
                    value: admin,
                    inline: true
                }
            ])
            .setColor("#5d8aa8")
            .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
            .setFooter(message.member.displayName, message.author.avatarURL({ dynamic: true }));
        if (message.author.id == process.env.DEV) embed.addField('Dev', dev, true)
        message.channel.send(embed)
    }
}