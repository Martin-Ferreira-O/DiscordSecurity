import channel from '../model/channel.js';
export async function run(client, message, args, idioma) {
    const lang = idioma.commands.protected;
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(lang.noPerms);
    const canal = message.mentions.channels.first() || client.channels.fetch(args[0]).catch(err => {});
    if (!canal) return message.channel.send(lang.noCanal)
    if (canal.guild.id !== message.guild.id) return message.channel.send(lang.noCanal);
    const searchChannel = await channel.findOne({ guildId: message.guild.id });
    if (!searchChannel) {
        const nuevoCanal = new channel({
            guildId: message.guild.id,
            channel: canal.id
        });
        await nuevoCanal.save();
    } else {
        if (searchChannel.channel.length >= 3) return message.channel.send('No puedes establecer mas de 3 canales')
        await searchChannel.updateOne({ $push: { channel: canal.id } });
    }
    message.channel.send(canal.toString() + lang.establecido);
}
export const help = {
    name: 'Protected-channels',
    alias: ['set-protected-channel'],
    onlyDev: false,
    category: 'admin'
}