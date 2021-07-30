import { CommandBase } from '../../lib';
import Bot from '../../bot.js';
import { Message } from 'discord.js';
export default class SetupCommand extends CommandBase {
    constructor();
    run(bot: Bot, message: Message, args: Array<string>): Promise<Message>;
}
//# sourceMappingURL=setup.d.ts.map