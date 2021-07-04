import Bot from "../../Bot";
import { Vip, Messages } from "../../database/model/index";
import BaseEvent from '../../utils/Structure/Events';
export default class UpdatePinsEvent extends BaseEvent {
    constructor() {
        super('channelPinsUpdate');
    }
    async run(bot: Bot, channel) {
        if (!channel.guild) return;
        const searchVip = await Vip.findOne({ guildId: channel.guild.id });
        if (!searchVip || searchVip.licence !== 'vip3') return;

        const update = await Messages.findOne({ guild: channel.guild.id, channel: channel.id });
        const message = await channel.messages.fetchPinned();
        const data = [];
        for (const msg of message.array()) {
            data.push({
                username: msg.author.username,
                avatar: msg.author.avatarURL(),
                content: msg.content
            });
        }
        if (!update) {
            await Messages.create({
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