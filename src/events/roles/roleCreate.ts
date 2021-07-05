// Esto sera si un usuario crea muchos roles a la vez sera auto baneado :caritafacherafacherita:
import { Langs, Registrador } from "../../database/model/index";
import espanol from '../../lang/espanol';
import ingles from '../../lang/english';
import BaseEvent from '../../utils/Structure/events';
import Bot from "../../bot";
import { Role } from "discord.js";
export default class RoleCreateEvent extends BaseEvent {
    constructor() {
        super('roleCreate');
    }
    async run(bot: Bot, role: Role) {
        if (!role.guild.me.permissions.has("ADMINISTRATOR")) return;
        const search = await Registrador.findById(role.guild.id);
        if (!search) return;

        if (!search.roles) return;

        let idioma;
        const searchLang = await Langs.findById(role.guild.id);
        if (!searchLang) idioma = ingles;
        else searchLang.lang == 'es' ? idioma = espanol : idioma = ingles;


        // No terminado mañana sigo
    }
}