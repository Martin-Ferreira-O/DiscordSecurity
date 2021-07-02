import model from "../../database/model/vips.js";
import BaseEvent from '../../utils/Structure/Events.js';
export default class ReadyEvent extends BaseEvent {
    constructor() {
        super('ready');
    }
    async run(client) {
        console.log(bot.client.user.tag + " se conecto correctamente en " + bot.client.guilds.cache.size + " servidores");
        bot.client.user.setActivity("Protecting guilds", { type: 'WATCHING' });
        const guilds = await model.find();
        setInterval(async() => {
                if (guilds.length >= 1) {
                    for (const guild of guilds) {
                        if (guild.time.getTime() >= new Date().getTime()) {
                            await model.findOneAndDelete({ guildId: guild.guildId });
                        }
                    }
                }
            }, 3.6e+7) // 10 horas
    }
}