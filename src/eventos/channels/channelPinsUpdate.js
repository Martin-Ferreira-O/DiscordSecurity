import messages from "../../database/model/messages.js";
import vip from '../../database/model/vips.js';
import BaseEvent from '../../utils/Structure/Events.js';
export default class UpdatePinsEvent extends BaseEvent {
    constructor() {
        super('channelPinsUpdate');
    }
    async run(client, channel, time) {
        if (!channel.guild) return;
        const searchVip = await vip.findOne({ guildId: channel.guild.id });
        if (!searchVip || searchVip.licence !== 'vip3') return;

        const update = await messages.findOne({ guild: channel.guild.id, channel: channel.id });
        const message = await channel.messages.fetchPinned();
        const data = [];
        for (msg of message.array()) {
            data.push({
                username: msg.author.username,
                avatar: msg.author.avatarURL(),
                content: msg.content
            });
        }
        if (!update) {
            await messages.create({
                guild: channel.guild.id,
                channel: channel.id,
                messages: data
            });
        } else {
            update.messages = data;
            await update.save();
        }
    }
}