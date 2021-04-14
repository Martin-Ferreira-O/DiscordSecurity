import channel from '../model/channel.js';
export async function run(client, message, args, idioma) {
    const lang = idioma.commands.protected;
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(lang.noPerms);
    const canal = message.mentions.channels.first() || client.channels.fetch(args[1]).catch(err => {});
    if (!canal) return message.channel.send(lang.noCanal)
    if (canal.guild.id !== message.guild.id) return message.channel.send(lang.noCanal);
    const searchChannel = await channel.findOne({ guildId: message.guild.id });
    if (["remove", "remover"].includes(args[0].toLowerCase())) {
        if (!searchChannel) return message.channel.send(lang.noCanales);
        const indice = searchChannel.channel.indexOf(canal.id);
        if (indice == -1) return message.channel.send(lang.noFound);
        searchChannel.channel.splice(indice, 1);
        console.log(await searchChannel.updateOne());
    } else if (["add", "añadir"].includes(args[0].toLowerCase())) {
        if (!searchChannel) {
            const nuevoCanal = new channel({
                guildId: message.guild.id,
                channel: canal.id
            });
            await nuevoCanal.save();
        } else {
            if (searchChannel.channel.length >= 3) return message.channel.send(lang.no3Mas)
            await searchChannel.updateOne({ $push: { channel: canal.id } });
        }
        message.channel.send(canal.toString() + lang.establecido);
    } else message.channel.send(lang.errorArgs);
}
export const help = {
    name: 'Protected-channels',
    alias: [],
    onlyDev: false,
    category: 'admin'
}