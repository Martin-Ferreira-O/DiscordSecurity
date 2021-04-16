const util = require('util');
const ch = require("child_process");
const exec = util.promisify(ch.exec);
const { Util } = require("discord.js-light");

export async function run(client, message, args, idioma) {
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
export const help = {
    alias: [],
    onlyDev: true,
    name: "Exec",
    category: 'dev'
}