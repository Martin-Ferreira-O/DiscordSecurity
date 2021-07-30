import { Guild } from "discord.js";
import Bot from "../../bot";
import { BaseEvent } from '../../lib';
export default class GuildCreateEvent extends BaseEvent {
    constructor();
    run(bot: Bot, guild: Guild): Promise<void>;
}
//# sourceMappingURL=guildCreate.d.ts.map