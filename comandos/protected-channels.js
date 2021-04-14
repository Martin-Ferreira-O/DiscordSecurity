import channel from '../model/channel.js';
export async function run(client, message, args, idioma) {
    const lang = idioma.commands.protected;
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(lang.noPerms);
    const canal = message.mentions.channels.first() || client.channels.fetch(args[0]).catch(err => {});
    if (!canal || canal.guild.id !== message.guild.id) return message.channel.send(lang.noCanal);
    const searchChannel = await channel.findOne({ guildId: message.guild.id });
    if (!searchChannel) {
        const nuevoCanal = new channel({
            guildId: message.guild.id,
            channel: canal.id
        });
        await nuevoCanal.save();
    } else {
        await searchChannel.updateOne({ channel: canal.id });
    }
    message.channel.send(lang.establecido);
}
export const help = {
    name: 'Protected-channels',
    alias: ['set-protected-channel'],
    onlyDev: false,
    category: 'admin'
}