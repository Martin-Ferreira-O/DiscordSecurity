const coleccion = new Map();
import espanol from '../../lang/espanol';
import { Registrador, Langs, Channel } from "../../database/model/index";
import ingles from '../../lang/english';
import { changeChannel, createChannel, sendMessages } from '../../utils/channelDelete';
import BaseEvent from '../../utils/Structure/Events';
import Bot from '../../Bot';
import { GuildChannel, TextChannel } from 'discord.js';
export default class DeleteChannelEvent extends BaseEvent {
    constructor() {
        super('channelDelete');
    }
    async run(bot: Bot, channel: GuildChannel) {
        if (!channel.guild.me.permissions.has(["BAN_MEMBERS", "VIEW_AUDIT_LOG"])) return;

        const search = await Registrador.findById(channel.guild.id);
        if (!search) return;

        let idioma;
        const searchLang = await Langs.findById(channel.guild.id);
        if (!searchLang) idioma = ingles;
        else searchLang.lang == 'es' ? idioma = espanol : idioma = ingles;


        const contestar = idioma.events.channelDelete;
        const fetchedLogs = await channel.guild.fetchAuditLogs({
            limit: 1,
            type: 'CHANNEL_DELETE',
        });

        const deletionLog = fetchedLogs.entries.first();
        if (!deletionLog) return;
        const canalReportes = await bot.client.channels.fetch(search.channel).catch(err => {}) as TextChannel;
        const { executor } = deletionLog;
        let comprobacion = false;
        const searchProtected = await Channel.findOne({ guildId: channel.guild.id });
        if (searchProtected && searchProtected.channel.includes(channel.id)) comprobacion = true;

        if (!comprobacion) {
            if (search.users.includes(executor.id) || executor.id == channel.guild.ownerID) return; // Si no existen los canales protegidos y los autores no fueron los de la lista se seguira el proceso
        } else {
            if (channel.guild.ownerID == executor.id) return;
            const newChannel = await createChannel(channel, idioma); // Creamos el canal denuevo;
            await Promise.all([channel.guild.members.ban(executor.id), sendMessages(newChannel, channel), changeChannel(channel, newChannel)])
            if (canalReportes) canalReportes.send(executor.tag + " " + contestar.protegido);
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
            }
            setTimeout(() => {
                if (coleccion.has(executor.id)) coleccion.delete(executor.id)
            }, 20 * 1000); // Si borra 3 canales en menos de 20 segundos se va baneado :D

        }

    }
}