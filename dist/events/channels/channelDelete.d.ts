import { BaseEvent } from '../../lib';
import Bot from '../../bot';
import { GuildChannel } from 'discord.js';
export default class DeleteChannelEvent extends BaseEvent {
    constructor();
    run(bot: Bot, channel: GuildChannel): Promise<void>;
}
//# sourceMappingURL=channelDelete.d.ts.map