import { Message, MessageEmbed } from 'discord.js';
import Bot from '../../bot.js';
import {Registrador} from "../../database/";
import { CommandBase } from '../../lib';
export default class VewUsuariosCommand extends CommandBase {
    constructor() {
        super('ver-usuarios', 'Admin', ["whitelist-view", "white-list-view", "view-users"], 300)
    }
    async run(bot: Bot, message: Message, args: Array<string>) {
        const lang = bot.language.commands.verUsuarios;
        const search = await Registrador.findById(message.guild.id);
        if (!search) return message.channel.send(bot.language.global.noSearch)

        const users: Array<string> = [];
        if (search.users.length <= 0) return message.channel.send(lang.noUsuario)
        for (let i: number = 0; i < search.users.length; i++) {
            const user = await bot.client.users.fetch(`${BigInt(search.users[i])}`);
            users.push("#" + (i + 1) + " " + user.tag)
        }
        const embed = new MessageEmbed()
        .setDescription(users.join("\n"))
        .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }));
        message.channel.send({embeds: [embed]});
    }
}