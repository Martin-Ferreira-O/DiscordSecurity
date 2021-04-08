import Discord from "discord.js-light";
import os from 'os';
import cpuStat from "cpu-stat";
import moment from "moment";
import "moment-duration-format";
import { promisify } from "util";
const usagePercent = promisify(cpuStat.usagePercent);

export async function run(bot, message, args, idioma) {
    const lang = idioma.commands.stats;

    message.channel.startTyping();
    const percent = await usagePercent();
    const mem = process.memoryUsage();
    const memoryU = memory(mem.rss);
    const embedStats = new Discord.MessageEmbed()
        .setTitle("***__~~`Stats`~~__***")
        .setColor("RANDOM")
        .addField("RAM", `${memory(os.totalmem() - os.freemem(), false)} / ${memory(os.totalmem())}`, true)
        .addField(`Bot RAM usage`, memoryU, true)
        .addField("Uptime ", `${moment.duration(Date.now() - bot.readyTimestamp, "ms").format("d [days], h [hours], m [minutes]")}`, true)
        .addField("Node.js", `${process.version}`, true)
        .addField("CPU usage", `\`${percent.toFixed(2)}%\``, true)
        .addField("Arch", `\`${os.arch()}\``, true)
        .addField("Platform", `\`\`${os.platform()}\`\``, true)

    await message.channel.send(embedStats);
    message.channel.stopTyping();


}

/**
 * @param {Number} bytes
 * @param {Boolean} r
 * @returns {string}
 */
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

export const help = {
    name: "stats",
    alias: [],
    onlyDev: false
}

// Thanks Gidget bot && Andremor!!