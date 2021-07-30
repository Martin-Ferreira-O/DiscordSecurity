import Bot from '../../bot';
import { Message } from 'discord.js';
import { CommandBase } from '../../lib';
export default class MaliciosoCommand extends CommandBase {
    constructor();
    run(bot: Bot, message: Message, args: Array<string>): Promise<Message | import("../../database/model").IMalicioso | ({
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    })>;
}
//# sourceMappingURL=malicioso.d.ts.map