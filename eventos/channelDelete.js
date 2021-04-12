const coleccion = new Map();
import registrador from "../model/registrador.js";
import lang from '../model/langs.js';
import espanol from '../lang/espanol.js';
import ingles from '../lang/english.js';

export default async(client, channel) => {

    if (!channel.guild.me.hasPermission("ADMINISTRADOR")) return;
    const search = await registrador.findOne({ guildId: channel.guild.id });
    if (!search) return;

    let idioma;
    const searchLang = await lang.findOne({ guildId: channel.guild.id });
    if (!searchLang) idioma = ingles;
    else searchLang.lang == 'es' ? idioma = espanol : idioma = ingles;

    let contestar = idioma.events.channelDelete;
    const fetchedLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_DELETE',
    });
    const deletionLog = fetchedLogs.entries.first();
    if (!deletionLog) return;
    const { executor } = deletionLog;
    if (search.users.includes(executor.id) || executor.id == channel.guild.ownerID) return;
    const canalReportes = await client.channels.fetch(search.channel).catch(err => {});
    if (search.extrem) {
        await channel.guild.members.ban(executor.id, { days: 7, reason: contestar.reasonBan });
        if (canalReportes) canalReportes.send(contestar.reportChannel1 + executor.tag + contestar.reportChannel2Xtreme);
        const nuevoCanal = await channel.guild.channels.create(channel.name, {
            type: 'text',
            topic: channel.topic ? channel.topic : "",
            nsfw: channel.nsfw ? true : false,
            parent: channel.parent ? channel.parent : false,
            permissionOverwrites: channel.permissionOverwrites,
            reason: idioma.creacionCanal
        });
    } else {
        if (!coleccion.has(executor.id)) {
            coleccion.set(executor.id, 10)
        } else if (coleccion.get(executor.id) >= 20) {
            channel.guild.members.ban(executor.id, { days: 7, reason: contestar.reasonBan });
            if (canalReportes) canalReportes.send(contestar.reportChannel1 + executor.tag + contestar.reportChannel2)
        } else {
            const n = coleccion.get(executor.id)
            coleccion.set(executor.id, n + 10)
        };

        setTimeout(() => {
            if (coleccion.has(executor.id)) coleccion.delete(executor.id)
        }, 20 * 1000); // Si borra 3 canales en menos de 20 segundos se va baneado :D
    }
}