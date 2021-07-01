// Esto sera si un usuario crea muchos roles a la vez sera auto baneado :caritafacherafacherita:
import registrador from "../../database/model/registrador.js";
import lang from '../../database/model/langs.js';
import espanol from '../../lang/espanol.js';
import ingles from '../../lang/english.js';
import BaseEvent from '../../utils/Structure/Events.js';
export default class RoleCreateEvent extends BaseEvent {
    constructor() {
        super('roleCreate');
    }
    async run(client, role) {
        if (!role.guild.me.hasPermission("ADMINISTRADOR")) return;
        const search = await registrador.findOne({ guildId: role.guild.id });
        if (!search) return;

        if (!search.roles) return;

        let idioma;
        const searchLang = await lang.findOne({ guildId: role.guild.id });
        if (!searchLang) idioma = ingles;
        else searchLang.lang == 'es' ? idioma = espanol : idioma = ingles;


        // No terminado mañana sigo
    }
}