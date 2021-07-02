import registrador from "../../database/model/registrador.js";
import BaseCommand from '../../utils/Structure/Command.js';
import { Client, Message } from "discord.js";
export default class AddUser extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('adduser', 'Admin', ["añadir-usuarios", "add-user"], 15)
    }
    async run(client: Client, message: Message, args: string[], idioma) {
        if (message.author.id !== message.guild.ownerID) return message.channel.send(idioma.global.onlyOwner);

        const lang = idioma.commands.addUsers;
        const search = await registrador.findOne({ guildId: message.guild.id });
        
        if (!search) return message.channel.send(idioma.global.noSearch);
        const usuarios = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(err => {});
        
        if (!usuarios) return message.channel.send(lang.noValido);
        if (search.users.includes(usuarios.id)) return message.channel.send(lang.yaEsta);
        await registrador.updateOne({ guildId: message.guild.id }, { $push: { users: usuarios.id } });
        message.channel.send(lang.agregado + usuarios.tag);
    }
}
export const help = {
    name: "Add-users",
    desc: "Añade usuarios a la lista blanca para que puedan ejecutar acciones (Solo gente de extrema confianza).",
    alias: ["añadir-usuarios", "add-user"],
    onlyDev: false,
    category: 'admin'
}