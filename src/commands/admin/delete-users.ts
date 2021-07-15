import { Message, User } from "discord.js";
import Bot from "../../bot.js";
import {Registrador} from "../../database/model/index";
import BaseCommand from '../../utils/Structure/command';
export default class DeleteUsersCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('delete-users', 'Admin', ["delete-user", "borrar-usuarios", "unwhitelist"], 15)
    }
    async run(bot: Bot, message: Message, args: string[]) {
        const lang = bot.language.commands.deleteUsers;
        if (message.author.id !== message.guild.ownerId) return message.channel.send(bot.language.global.onlyOwner);
        const search = await Registrador.findById(message.guild.id);
        if (!search) return message.channel.send(bot.language.global.noSearch);
        if (!args[0]) return message.channel.send(lang.ingresarId);
        const userRemove: User | void = await bot.client.users.fetch(`${BigInt(args[0])}`).catch(() => {});
        if (!userRemove) return message.channel.send(lang.idValida);
        const usersArr = search.users;
        if (usersArr.length <= 0) return message.channel.send(lang.noUsers);
        if (!usersArr.includes(userRemove.id)) return message.channel.send(lang.noEncontrado);
        else usersArr.splice(usersArr.indexOf(userRemove.id), 1);
        await Registrador.findByIdAndUpdate(message.guild.id, { users: usersArr });
        message.channel.send(userRemove.tag + lang.sacado);

    }
}