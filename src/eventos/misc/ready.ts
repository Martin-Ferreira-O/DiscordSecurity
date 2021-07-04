import Bot from "../../Bot";
import {Vip} from "../../database/model/index";
import BaseEvent from '../../utils/Structure/Events';
export default class ReadyEvent extends BaseEvent {
    constructor() {
        super('ready');
    }
    async run(bot: Bot) {
        console.log(bot.client.user.tag + " se conecto correctamente en " + bot.client.guilds.cache.size + " servidores");
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
            }, 3.6e+7) // 10 horas
    }
}