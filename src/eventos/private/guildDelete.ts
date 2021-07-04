import { Guild, MessageEmbed } from "discord.js";
import Bot from "../../Bot";
import BaseEvent from '../../utils/Structure/Events';
export default class GuildDeleteEvent extends BaseEvent {
    constructor() {
        super('guildDelete');
    }
    async run(bot: Bot, guild: Guild) {
        const dueño = await bot.client.users.fetch(guild.ownerID);
        const embed = new MessageEmbed()
            .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
            .setDescription("Me eliminaron de un servidor, aca puedes obtener mas información al respecto")
            .addFields({
                name: "Miembros",
                value: guild.memberCount,
                inline: true
            }, {
                name: "Dueño",
                value: dueño.id + " " + dueño.tag,
                inline: true
            })
            .setColor("RED")
            .setThumbnail(guild.iconURL({ dynamic: true }));
        const channel = await bot.client.channels.fetch("734207834866188300").catch(() => null);
        if (channel) channel.send(embed)
    }
}