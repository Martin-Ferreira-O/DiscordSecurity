import {Channel, Messages} from "../database";
import fetch from "node-fetch";

import { GuildChannel, TextChannel } from "discord.js";

export const changeChannel = async(oldChannel: GuildChannel, newChannel: GuildChannel) => {
    if (oldChannel.equals(newChannel)) throw new Error("The oldChannel and newChannel its ==");
    const verif = await Channel.findById(newChannel.guild.id)
    if (!verif) throw new Error("Not protected channels in this Guild.");
    if (verif.channel.includes(oldChannel.id)) {
        verif.channel = verif.channel.filter((i: string) => i !== oldChannel.id); // filtramos
        verif.channel.push(newChannel.id);
        await verif.save()
    } else throw new Error("The old channel is not in the list")
}

export const createChannel = async(channel, idioma) => {
    const newChannel: TextChannel = await channel.guild.channels.create(channel.name, {
        type: 'text',
        topic: channel.topic ? channel.topic : "",
        nsfw: channel.nsfw ? true : false,
        parent: channel?.parent ? channel.parent : null,
        permissionOverwrites: channel.permissionOverwrites,
        reason: idioma.creacionCanal
    });
    return newChannel;
}

export const sendMessages = async(channel: TextChannel, oldChannel: GuildChannel) => {
    const verif = await Messages.findOne({ _id: oldChannel.guild.id, channel: oldChannel.id });
    if (!verif) return;
    const webhook = await channel.createWebhook('Backup Message', { reason: 'Backup message' });
    const url = `https://canary.discord.com/api/webhooks/${webhook.id}/${webhook.token}`;
    for (const message of verif.messages.reverse()) {
        await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "username": message.username,
                "avatar_url": message.avatar,
                "content": message.content
            })
        });
    } // Haremos las peticiones mediante la misma api de discord con node-fetch para una mayor optimizacion y evitar rate-limit.
    return false;
}