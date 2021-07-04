import Bot from '../../Bot';
import { GuildChannel, Message, TextChannel } from 'discord.js';
import {Channel} from '../../database/model/index';
import BaseCommand from '../../utils/Structure/Command';
export default class PTCCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('protected-channels', 'Admin', ["canales-protegidos", 'ptc'], 5)
    }
    async run(bot: Bot, message: Message, args: string[], idioma) {
        const lang = idioma.commands.protected;
        if (message.author.id != message.guild.ownerID) return message.channel.send(lang.noPerms);
        if (!args[0]) return message.channel.send(lang.removeAdd);

        const canal: GuildChannel | TextChannel = message.mentions.channels.first() as TextChannel | GuildChannel || message.guild.channels.cache.get(args[1]) as TextChannel | GuildChannel;

        const searchChannel = await Channel.findById(message.guild.id);
        
        if (["remove", "remover"].includes(args[0].toLowerCase())) {

            if (!searchChannel) return message.reply(lang.noCanales);

            const indice = searchChannel.channel.indexOf(args[1]);
            if (indice === -1) return message.channel.send(lang.noFound);
            searchChannel.channel.splice(indice, 1);
            await searchChannel.save();
            message.channel.send(lang.removeExitoso);

        } else if (["add", "añadir"].includes(args[0].toLowerCase())) {
            if (!canal) return message.channel.send(lang.noCanal);

            if (canal.guild.id !== message.guild.id) return message.channel.send(lang.noCanal);
            
            if (!searchChannel) {
                const nuevoCanal = new Channel({
                    guildId: message.guild.id,
                    channel: canal.id
                });
                await nuevoCanal.save();
            } else {
                if (searchChannel.channel.length >= 3) return message.channel.send(lang.no3Mas);
                if (searchChannel.channel.includes(canal.id)) return message.channel.send(lang.yaEsta);
                await searchChannel.updateOne({ $push: { channel: canal.id } });
            }
            message.channel.send(canal.toString() + lang.establecido);
        } else if (["view", "ver"].includes(args[0].toLowerCase())) {
            if (!searchChannel) return message.channel.send('No existen los canales')
            message.channel.send(searchChannel.channel.join("\n"))
        } else message.channel.send(lang.removeAdd);
    }
}