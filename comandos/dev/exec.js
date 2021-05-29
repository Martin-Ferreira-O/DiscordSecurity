import util from 'util';
import ch from "child_process";
const exec = util.promisify(ch.exec);
import pkg from "discord.js-light";
const { Util } = pkg;
import BaseCommand from '../../utils/Structure/Command';
export default class ExecCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('exec', 'dev', ['console'], 1)
    }
    async run(client, message, args, idioma) {
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