import pkg from "discord.js-light";
const { MessageEmbed } = pkg;
import BaseEvent from '../../utils/Structure/Events.js';
export default class GuildCreateEvent extends BaseEvent {
    constructor() {
        super('guildCreate');
    }
    async run(client, guild) {
        const dueño = await bot.client.users.fetch(guild.ownerID);
        const embed = new MessageEmbed()
            .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
            .setDescription("Me añadieron a un nuevo servidor, aca puedes obtener mas información al respecto")
            .addFields([{
                name: "Miembros",
                value: guild.memberCount,
                inline: true
            }, {
                name: "Dueño",
                value: dueño.id + " " + dueño.tag,
                inline: true
            }])
            .setColor("GREEN")
            .setThumbnail(guild.iconURL({ dynamic: true }))
        if (guild.me.hasPermission("VIEW_AUDIT_LOG")) {
            const fetchedLogs = await guild.fetchAuditLogs({
                limit: 1,
                type: 'BOT_ADD',
            });
            const deletionLog = fetchedLogs.entries.first();
            if (deletionLog) {
                const { executor, target } = deletionLog;
                if (target.id == bot.client.user.id) embed.addField("Me agrego el usuario", executor.tag)
            }
        }
        const channel = await bot.client.channels.fetch("734207834866188300").catch(err => {})
        if (channel) channel.send(embed)
    }
}