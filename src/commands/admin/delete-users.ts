import { Message, User } from "discord.js";
import Bot from "../../bot.js";
import {Registrador} from "../../database/model/index";
import BaseCommand from '../../utils/Structure/command';
export default class DeleteUsersCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('delete-users', 'Admin', ["delete-user", "borrar-usuarios", "unwhitelist"], 15)
    }
    async run(bot: Bot, message: Message, args: string[], langT) {
        const lang = langT.commands.deleteUsers;
        if (message.author.id !== message.guild.ownerID) return message.channel.send(langT.global.onlyOwner);

        const search = await Registrador.findById(message.guild.id);

        if (!search) return message.channel.send(langT.global.noSearch);


        if (!args[0]) return message.channel.send(lang.ingresarId);

        const usuarioSacar: User | void = await bot.client.users.fetch(`${BigInt(args[0])}`).catch(() => {});
        if (!usuarioSacar) return message.channel.send(lang.idValida);

        const arrayDeUsuarios = search.users;
        if (arrayDeUsuarios.length <= 0) return message.channel.send(lang.noUsers);

        if (!arrayDeUsuarios.includes(usuarioSacar.id)) return message.channel.send(lang.noEncontrado);
        else {
            const indice = arrayDeUsuarios.indexOf(usuarioSacar.id);
            arrayDeUsuarios.splice(indice, 1);
        }

        await Registrador.updateOne({ guildId: message.guild.id }, { users: arrayDeUsuarios });
        message.channel.send(usuarioSacar.tag + lang.sacado);

    }
}