import model from "../../database/model/vips.js";
import BaseEvent from '../../utils/Structure/Events.js';
export default class ReadyEvent extends BaseEvent {
    constructor() {
        super('ready');
    }
    async run(client) {
        console.log(client.user.tag + " se conecto correctamente en " + client.guilds.cache.size + " servidores");
        client.user.setActivity("Protecting guilds", { type: 'WATCHING' });
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