import util from 'util';
import ch from "child_process";
const exec = util.promisify(ch.exec);
import { Message, Util } from "discord.js";
import BaseCommand from '../../utils/Structure/Command';
import Bot from '../../Bot';
export default class ExecCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('exec', 'dev', ['console'], 1)
    }
    async run(bot: Bot, message: Message, args: Array<string>, idioma) {
        if (!args[0]) return message.channel.send("Debes ingresar algo")
        try {
            exec(args.join(" ")).then(e => {
                const { stdout, stderr } = e;
                if (!stdout && !stderr) return message.channel.send("Comando ejecutado pero sin output");
                if (stdout) {
                    const text = Util.splitMessage(stdout, { maxLength: 1950, char: "" });
                    message.channel.send(text[0], { code: "sh" });
                }
                if (stderr) {
                    const text = Util.splitMessage(stderr, { maxLength: 1950, char: "" });
                    message.channel.send(text[0], { code: "sh" });
                }
            }).catch(e => {
                const text = Util.splitMessage(util.inspect(e, { depth: 0 }), { maxLength: 1950, char: "" });
                message.channel.send(text[0], { code: "sh" });
            });
        } catch (error) {
            const text = Util.splitMessage(util.inspect(error, { depth: 0 }), { maxLength: 1950, char: "" });
            await message.channel.send(text[0], { code: "sh" });
        }

    }
}