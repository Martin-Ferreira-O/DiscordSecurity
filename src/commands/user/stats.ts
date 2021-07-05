import cpuStat from "cpu-stat";
import moment from "moment";
import "moment-duration-format";
import { promisify } from "util";
const usagePercent = promisify(cpuStat.usagePercent);

import BaseCommand from '../../utils/Structure/command';
import Bot from "../../bot";
import { Message, MessageEmbed } from "discord.js";
export default class StatsCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('stats', 'user', [], 3)
    }
    async run(bot: Bot, message: Message, args: Array<string>) {
        const percent = await usagePercent();
        const mem = process.memoryUsage();
        const memoryU = memory(mem.rss);
        const embedStats = new MessageEmbed()
            .setTitle("***__~~`Stats`~~__***")
            .setColor("RANDOM")
            .addField(`Bot RAM usage`, memoryU, true)
            .addField("Uptime ", `${moment.duration(Date.now() - bot.client.readyTimestamp, "ms").format("d [days], h [hours], m [minutes]")}`, true)
            .addField("Node.js", `${process.version}`, true)
            .addField("CPU usage", `\`${percent.toFixed(2)}%\``, true);
        await message.channel.send({embed: embedStats});
    }
}

function memory(bytes = 0, r = true) {
    const gigaBytes = bytes / 1024 ** 3;
    if (gigaBytes > 1) {
        return `${gigaBytes.toFixed(1)} ${r ? "GB" : ""}`;
    }

    const megaBytes = bytes / 1024 ** 2;
    if (megaBytes > 1) {
        return `${megaBytes.toFixed(2)} ${r ? "MB" : ""}`;
    }

    const kiloBytes = bytes / 1024;
    if (kiloBytes > 1) {
        return `${kiloBytes.toFixed(2)} ${r ? "KB" : ""}`;
    }

    return `${bytes.toFixed(2)} ${r ? "B" : ""}`;
}
// Thanks Gidget bot && Andremor!! for this logic and code