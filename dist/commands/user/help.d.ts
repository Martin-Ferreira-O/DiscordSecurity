import { Message } from 'discord.js';
import Bot from '../../bot.js';
import { CommandBase } from '../../lib';
export default class HelpCommand extends CommandBase {
    constructor();
    run(bot: Bot, message: Message, args: Array<string>): Promise<Message>;
}
//# sourceMappingURL=help.d.ts.map