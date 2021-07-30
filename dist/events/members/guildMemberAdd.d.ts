import { BaseEvent } from '../../lib';
import Bot from '../../bot';
import { GuildMember } from 'discord.js';
export default class MemberAddEvent extends BaseEvent {
    constructor();
    run(bot: Bot, member: GuildMember): Promise<void>;
}
//# sourceMappingURL=guildMemberAdd.d.ts.map