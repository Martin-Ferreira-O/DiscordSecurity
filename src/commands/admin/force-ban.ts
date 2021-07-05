import {Malicioso} from "../../database/model/index";
import BaseCommand from '../../utils/Structure/command';
import Bot from "../../bot";
import { Message, Util, MessageEmbed } from "discord.js";
export default class ForceBanCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('force-ban', 'Admin', ["forceban"], 1500)
    }
    async run(bot: Bot, message: Message, args: string[], idioma) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(idioma.global.noPerms);
        const lenguaje = idioma.commands.forceban;
        const users = await Malicioso.findOne();
        if (!users) return message.channel.send(lenguaje.noUsers)
        const msg = await message.channel.send(lenguaje.baneado);
        let noBans: number = 0;
        let baneados: number = 0;
        for (const usuarioBaneado of users.usuarios) {
            await Util.delayFor(5000)
            await message.guild.members.ban(usuarioBaneado, { days: 7, reason: lenguaje.reason }).catch(err => { noBans++ });
            baneados++;
        };
        const embed = new MessageEmbed()
            .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
            .setDescription(lenguaje.desc)
            .addFields({
                    name: lenguaje.ready,
                    value: (baneados - noBans),
                    inline: true
                },
                {
                    name: lenguaje.errores,
                    value: noBans,
                    inline: true
                });
        await msg.edit({ embeds: [embed] });
    }
}