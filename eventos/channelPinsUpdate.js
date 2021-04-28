import messages from "../model/messages.js";
import vip from '../model/vips.js';
export default async(client, channel, time) => {
    if (!channel.guild) return;
    const searchVip = await vip.findOne({ guildId: channel.guild.id });
    if (!searchVip || searchVip.licence !== 'vip3') return;
    const update = await messages.findOne({ guildId: channel.guild.id, channel: channel.id });
    const message = await channel.messages.fetchPinned();
    if (!update) {
        await messages.create({
            guild: channel.guild.id,
            channel: channel.id,
            messages: message.array()
        });
    } else {
        await update.updateOne({ messages: message.array() })
    }
}