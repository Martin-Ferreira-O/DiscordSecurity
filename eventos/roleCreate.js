// Esto sera si un usuario crea muchos roles a la vez sera auto baneado :caritafacherafacherita:
import registrador from "../model/registrador.js";
import lang from '../model/langs.js';
import espanol from '../lang/espanol.js';
import ingles from '../lang/english.js';

export default async(client, role) => {
    if (!role.guild.me.hasPermission("ADMINISTRADOR")) return;
    const search = await registrador.findOne({ guildId: channel.guild.id });
    if (!search) return;

    if (!search.roles) return;

    let idioma;
    const searchLang = await lang.findOne({ guildId: channel.guild.id });
    if (!searchLang) idioma = ingles;
    else searchLang.lang == 'es' ? idioma = espanol : idioma = ingles;


    // No terminado mañana sigo
}