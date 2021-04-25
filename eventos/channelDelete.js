const coleccion = new Map();
import registrador from "../model/registrador.js";
import lang from '../model/langs.js';
import espanol from '../lang/espanol.js';
import ingles from '../lang/english.js';
import protectedChannel from "../model/channel.js";
import messages from "../model/messages.js";
export default async(client, channel) => {
    if (!channel.guild.me.hasPermission("ADMINISTRADOR")) return;
    const search = await registrador.findOne({ guildId: channel.guild.id });
    if (!search) return;

    let idioma;
    const searchLang = await lang.findOne({ guildId: channel.guild.id });
    if (!searchLang) idioma = ingles;
    else searchLang.lang == 'es' ? idioma = espanol : idioma = ingles;


    const contestar = idioma.events.channelDelete;
    const fetchedLogs = await channel.guild.fetchAuditLogs({
        limit: 1,
        type: 'CHANNEL_DELETE',
    });

    const deletionLog = fetchedLogs.entries.first();
    if (!deletionLog) return;
    const canalReportes = await client.channels.fetch(search.channel).catch(err => {});
    const { executor } = deletionLog;
    let comprobacion;
    const searchProtected = await protectedChannel.findOne({ guildId: channel.guild.id });
    if (searchProtected) {
        console.log(searchProtected)
        if (searchProtected.channel.includes(channel.id)) comprobacion = true;
        else comprobacion = false;
    }

    if (!comprobacion) {
        if (search.users.includes(executor.id) || executor.id == channel.guild.ownerID) return; // Si no existen los canales protegidos y los autores no fueron los de la lista se seguira el proceso
    } else {
        if (channel.guild.ownerID == executor.id) return;
        console.log("Comprobacion")
        await channel.guild.members.ban(executor.id); // Baneamos sin importar al que borro el canal protegido.
        const newChannel = await createChannel(channel, idioma); // Creamos el canal denuevo;
        await sendMessages(newChannel);
        if (canalReportes) await canalReportes.send(executor.tag + " " + contestar.protegido);
        return;
    } // Si es que existen canales protegidos

    if (search.extrem) {
        await channel.guild.members.ban(executor.id, { days: 7, reason: contestar.reasonBan });
        if (canalReportes) canalReportes.send(contestar.reportChannel1 + executor.tag + contestar.reportChannel2Xtreme);
        await createChannel(channel, idioma);
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

async function createChannel(channel, idioma) {
    const newChannel = await channel.guild.channels.create(channel.name, {
        type: 'text',
        topic: channel.topic ? channel.topic : "",
        nsfw: channel.nsfw ? true : false,
        parent: channel.parent ? channel.parent : false,
        permissionOverwrites: channel.permissionOverwrites,
        reason: idioma.creacionCanal
    });
    return newChannel;
}


async function sendMessages(channel) {
    const verif = await messages.findOne({ guild: channel.guild.id, channel: channel.id });
    if (!verif) return;
    const webhook = await channel.createWebhook('Backup Message', { reason: 'Backup message' });
    for (const message of verif) {
        await webhook.edit({
            name: message.username,
            avatar: message.avatar
        })
        await webhook.send(message.content);
    }
    return;
}