import { CommandBase } from '../../lib';
import Bot from "../../bot";
import { Message } from "discord.js";
export default class SetLangCommand extends CommandBase {
    constructor();
    run(bot: Bot, message: Message, args: Array<string>): Promise<Message>;
}
//# sourceMappingURL=set-lang.d.ts.map