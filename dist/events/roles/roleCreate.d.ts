import { BaseEvent } from '../../lib';
import Bot from "../../bot";
import { Role } from "discord.js";
export default class RoleCreateEvent extends BaseEvent {
    constructor();
    run(bot: Bot, role: Role): Promise<void>;
}
//# sourceMappingURL=roleCreate.d.ts.map