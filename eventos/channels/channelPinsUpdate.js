import messages from "../../database/model/messages.js";
import vip from '../../database/model/vips.js';
import BaseEvent from '../../utils/Structure/Events';
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
        const arrayDatos = [];
        for (const datos of message.array()) {
            const data = {
                username: datos.author.username,
                avatar: datos.author.avatarURL(),
                content: datos.content
            }
            arrayDatos.push(data);
        }
        if (!update) {
            await messages.create({
                guild: channel.guild.id,
                channel: channel.id,
                messages: arrayDatos
            });
        } else {
            await update.updateOne({ messages: arrayDatos })
        }
    }
}