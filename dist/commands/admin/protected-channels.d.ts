import Bot from '../../bot';
import { Message } from 'discord.js';
import { CommandBase } from '../../lib';
export default class PTCCommand extends CommandBase {
    constructor();
    run(bot: Bot, message: Message, args: string[]): Promise<Message>;
}
//# sourceMappingURL=protected-channels.d.ts.map