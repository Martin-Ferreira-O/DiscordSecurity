import { Guild, MessageEmbed } from "discord.js";
import Bot from "../../bot";
import { BaseEvent } from '../../lib';
export default class GuildCreateEvent extends BaseEvent {
    constructor() {
        super('guildCreate');
    }
    async run(bot: Bot, guild: Guild) {
        const owner = bot.client.users.cache.get(guild.ownerId) || await bot.client.users.fetch(`${BigInt(guild.ownerId)}`);
        const embed = new MessageEmbed()
            .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
            .setDescription("Me añadieron a un nuevo servidor, aca puedes obtener mas información al respecto")
            .addFields(
            {
                name: "Miembros",
                value: `${guild.memberCount}`,
                inline: true
            }, 
            {
                name: "Dueño",
                value: `${owner.id} | ${owner.tag}`,
                inline: true
            })
            .setColor("GREEN")
            .setThumbnail(guild.iconURL({ dynamic: true }))
        if (guild.me.permissions.has("VIEW_AUDIT_LOG")) {
            const fetchedLogs = await guild.fetchAuditLogs({
                limit: 1,
                type: 'BOT_ADD',
            });
            const deletionLog = fetchedLogs.entries.first();
            if (deletionLog) {
                const { executor } = deletionLog;
                embed.addField("Me agrego el usuario", executor.tag)
            }
        }
        const channel = await bot.client.channels.fetch("734207834866188300").catch(() => null);
        if (channel) channel.send(embed)
    }
}