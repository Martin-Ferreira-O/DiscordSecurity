import {Registrador} from "../../database/model/index";
import BaseCommand from '../../utils/Structure/command';
import { Message } from "discord.js";
import Bot from "../../bot.js";
export default class AddUser extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('adduser', 'Admin', ["añadir-usuarios", "add-user"], 15)
    }
    async run(bot: Bot, message: Message, args: Array<string>, langT) {
        if (message.author.id !== message.guild.ownerID) return message.channel.send(langT.global.onlyOwner);
        const lang = langT.commands.addUsers;
        const search = await Registrador.findById(message.guild.id);
        if (!search) return message.channel.send(lang.global.noSearch);
        const user = message.mentions.users.first() || bot.client.users.cache.get(args[0]) || await bot.client.users.fetch(`${BigInt(args[0])}`).catch(() => null);
        if (!user) return message.channel.send(lang.noValido);
        if (search.users.includes(user.id)) return message.channel.send(lang.yaEsta);
        await Registrador.updateOne({ guildId: message.guild.id }, { $push: { users: user.id } });
        message.channel.send(lang.agregado + user.tag);
    }
}