import Bot from "../../bot";
import {Vip} from "../../database/";
import { BaseEvent } from '../../lib';
export default class ReadyEvent extends BaseEvent {
    constructor() {
        super('ready');
    }
    async run(bot: Bot) {
        console.log(`\x1b[31m[\x1b[36m${new Date().toLocaleDateString()}\x1b[31m] Im connected in \x1b[31m[\x1b[36m${bot.client.guilds.cache.size}\x1b[31m] guilds in cache\x1b[0m`);
        bot.client.user.setActivity("Protecting guilds", { type: 'WATCHING' });
        const guilds = await Vip.find();
        setInterval(async() => {
                if (guilds.length >= 1) {
                    for (const guild of guilds) {
                        if (guild.time.getTime() >= new Date().getTime()) {
                            await Vip.findByIdAndDelete(guild.guildId);
                        }
                    }
                }
            }, 10 * 1000 * 60 * 60) // 10 horas
    }
}