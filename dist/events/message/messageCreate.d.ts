import { Message } from 'discord.js';
import { BaseEvent } from '../../lib';
import Bot from '../../bot';
export default class MessageEvent extends BaseEvent {
    constructor();
    run(bot: Bot, message: Message): Promise<false | Message>;
}
//# sourceMappingURL=messageCreate.d.ts.map