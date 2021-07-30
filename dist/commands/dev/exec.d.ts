import { Message } from "discord.js";
import { CommandBase } from '../../lib';
import Bot from '../../bot';
export default class ExecCommand extends CommandBase {
    constructor();
    run(bot: Bot, message: Message, args: Array<string>): Promise<Message>;
}
//# sourceMappingURL=exec.d.ts.map