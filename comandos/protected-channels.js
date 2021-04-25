import channel from '../model/channel.js';
export async function run(client, message, args, idioma) {
    const lang = idioma.commands.protected;
    if (message.author.id != message.guild.ownerID) return message.channel.send(lang.noPerms);
    if (!args[0]) return message.channel.send(lang.removeAdd)
    const canal = message.mentions.channels.first() || await client.channels.fetch(args[1]).catch(err => {});
    const searchChannel = await channel.findOne({ guildId: message.guild.id });
    if (["remove", "remover"].includes(args[0].toLowerCase())) {

        if (!canal) return message.channel.send(lang.noCanal)
        if (!searchChannel) return message.channel.send(lang.noCanales);
        const indice = searchChannel.channel.indexOf(canal.id);
        if (indice <= -1 || !searchChannel.channel.includes(canal.id)) return message.channel.send(lang.noFound);
        const newArray = searchChannel.channel.splice(indice, 1);
        await searchChannel.updateOne({ channel: newArray });
        message.channel.send(lang.removeExitoso)

    } else if (["add", "añadir"].includes(args[0].toLowerCase())) {
        if (!canal) return message.channel.send(lang.noCanal)
        if (canal.guild.id !== message.guild.id) return message.channel.send(lang.noCanal);
        if (!searchChannel) {
            const nuevoCanal = new channel({
                guildId: message.guild.id,
                channel: canal.id
            });
            await nuevoCanal.save();
        } else {
            if (searchChannel.channel.length >= 3) return message.channel.send(lang.no3Mas)
            if (searchChannel.channel.includes(canal.id)) return message.channel.send(lang.yaEsta)
            await searchChannel.updateOne({ $push: { channel: canal.id } });
        }
        message.channel.send(canal.toString() + lang.establecido);
    } else if (["view", "ver"].includes(args[0].toLowerCase())) {
        if (!searchChannel) return message.channel.send('No existen los canales')
        message.channel.send(searchChannel.channel.join("\n"))
    } else message.channel.send(lang.removeAdd);
}
export const help = {
    name: 'Protected-channels',
    alias: ["canales-protegidos", 'ptc'],
    onlyDev: false,
    category: 'admin'
}