import jsp from 'jspaste';
import Bot from '../../Bot';
import util from 'util';
import BaseCommand from '../../utils/Structure/Command';
import { Message, MessageEmbed } from "discord.js";
export default class EvalCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('eval', 'dev', ['e'], 1)
    }
    async run(bot: Bot, message: Message, args: Array<string>) {
        // Este sera el tiempo que luego le restaremos a Date.now() para obtener los milisegundos que tardo en hacer el eval
        const tiempo1 = Date.now()
            // Este mensaje saldra primero y se editara cuando termine de hacer el eval
        const edit = new MessageEmbed()
            .setDescription(":stopwatch: Evaluando...")
            .setColor("#7289DA")
        const msg = await message.channel.send({embed: edit})
        try {
            let code = args.join(" ");
            let evalued = await eval(code);
            let tipo = typeof evalued || "Tipo no encontrado."
            if (typeof evalued !== 'string') evalued = util.inspect(evalued, { depth: 0, maxStringLength: 2000 });
            let txt = "" + evalued;

            if (txt.length > 1000) {
                const link = await jsp.publicar(txt);
                const embed = new MessageEmbed()
                    .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
                    .addField(":outbox_tray: Salida", `\`El codigo es muy largo, link:\` ${link.url}`)
                    .addField(":file_folder: Tipo", `\`\`\`js\n${tipo}\n\`\`\``, true)
                    .addField(":stopwatch: Tiempo", `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\``, true)
                    .setColor("#7289DA")
                msg.edit({embed});
            } else {
                const embed = new MessageEmbed()
                    .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
                    .addField(":outbox_tray: Salida", `\`\`\`js\n${txt}\n\`\`\``)
                    .addField(":file_folder: Tipo", `\`\`\`js\n${tipo}\n\`\`\``, true)
                    .addField(":stopwatch: Tiempo", `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\``, true)
                    .setColor("#7289DA")
                msg.edit({embed});
            }
        } catch (err) {
            let code = args.join(" ")
            const embed = new MessageEmbed()
                .setAuthor("Error en el eval", bot.client.user.displayAvatarURL({ dynamic: true }))
                .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
                .addField(":outbox_tray: Salida", `\`\`\`js\n${err}\n\`\`\``)
                .addField(":file_folder: Tipo", `\`\`\`js\nError\n\`\`\``)
                .setColor("RED")
            msg.edit({embed});
        }
    }
}