import { Message, MessageEmbed } from 'discord.js';
import Bot from '../../Bot.js';
import {Registrador} from "../../database/model/index";
import BaseCommand from '../../utils/Structure/Command';
export default class VewUsuariosCommand extends BaseCommand {
    constructor() {
        super('ver-usuarios', 'Admin', ["whitelist-view", "white-list-view", "view-users"], 300)
    }
    async run(bot: Bot, message: Message, args: Array<string>, idioma) {
        const lang = idioma.commands.verUsuarios;
        const search = await Registrador.findById(message.guild.id);
        if (!search) return message.channel.send(idioma.global.noSearch)

        let arrayUsuarios: Array<string> = [];
        if (search.users.length <= 0) return message.channel.send(lang.noUsuario)
        for (let i: number = 0; i < search.users.length; i++) {
            const user = await bot.client.users.fetch(search.users[i]);
            arrayUsuarios.push("#" + (i + 1) + " " + user.tag)
        }
        const embed = new MessageEmbed()
        .setDescription(arrayUsuarios.join("\n"))
        .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }));
        message.channel.send({embed});
    }
}