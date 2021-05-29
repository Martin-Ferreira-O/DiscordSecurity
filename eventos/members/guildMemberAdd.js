import registrador from "../../database/model/registrador.js";
import lang from '../../database/model/langs.js';
import espanol from '../../lang/espanol.js';
import ingles from '../../lang/english.js';
import usuarios from '../../database/model/maliciosos.js';
import BaseEvent from '../../utils/Structure/Events';
export default class MemberAddEvent extends BaseEvent {
    constructor() {
        super('guildMemberAdd');
    }
    async run(client, member) {
        let idioma;
        let countCatch;
        const querisMongo = await Promise.all([registrador.findOne({ guildId: member.guild.id }), usuarios.findOne(), lang.findOne({ guildId: member.guild.id })])
        if (!querisMongo[0]) return;
        if (querisMongo[2]) {
            if (querisMongo[2].lang == 'es') idioma = espanol;
            else idioma = ingles;
        } else idioma = ingles;
        let lenguaje = idioma.events.memberAdd;
        const canal = await client.channels.fetch(querisMongo[0].channel).catch(err => {})
        if (querisMongo[1].usuarios.includes(member.id)) {
            await member.ban({ reason: lenguaje.reason }).catch(err => {
                if (err.message.includes("Missing")) canal.send(member.user.tag + lenguaje.error)
                countCatch = true;
            })
            if (countCatch) return;
            canal.send(member.user.tag + lenguaje.texto).catch(err => {})
        } else return;
    }
}