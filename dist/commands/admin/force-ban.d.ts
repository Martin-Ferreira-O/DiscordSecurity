import { CommandBase } from '../../lib';
import Bot from "../../bot";
import { Message } from "discord.js";
export default class ForceBanCommand extends CommandBase {
    constructor();
    run(bot: Bot, message: Message, args: string[]): Promise<Message>;
}
//# sourceMappingURL=force-ban.d.ts.map