import espanol from '../../lang/espanol';
import ingles from '../../lang/english';
import {Registrador, Malicioso, Langs} from '../../database/';
import { BaseEvent } from '../../lib';
import Bot from '../../bot';
import { GuildMember, TextChannel } from 'discord.js';
export default class MemberAddEvent extends BaseEvent {
    constructor() {
        super('guildMemberAdd');
    }
    async run(bot: Bot, member: GuildMember) {
        let idioma;
        const querisMongo = await Promise.all([Registrador.findById(member.guild.id), Malicioso.findOne(), Langs.findById(member.guild.id)]);
        if (!querisMongo[0]) return;
        if (querisMongo[2]) {
            if (querisMongo[2].lang == 'es') idioma = espanol;
            else idioma = ingles;
        } else idioma = ingles;
        const lenguaje = idioma.events.memberAdd;
        const canal = await bot.client.channels.fetch(`${BigInt(querisMongo[0].channel)}`).catch(() => {}) as TextChannel;
        if (querisMongo[1].usuarios.includes(member.id)) {
            const banned = await member.ban({ reason: lenguaje.reason }).catch((_) => { canal.send(lenguaje.error.replace("%user%", member.user.tag)) });
            if (!banned) canal.send(member.user.tag + lenguaje.texto).catch(() => {});
        } else return;
    }
}