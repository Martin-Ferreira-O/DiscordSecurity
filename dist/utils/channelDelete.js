"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessages = exports.createChannel = exports.changeChannel = void 0;
const index_1 = require("../database/model/index");
const node_fetch_1 = __importDefault(require("node-fetch"));
const changeChannel = async (oldChannel, newChannel) => {
    if (oldChannel.equals(newChannel))
        throw new Error("The oldChannel and newChannel its ==");
    const verif = await index_1.Channel.findById(newChannel.guild.id);
    if (!verif)
        throw new Error("Not protected channels in this Guild.");
    if (verif.channel.includes(oldChannel.id)) {
        verif.channel = verif.channel.filter((i) => i !== oldChannel.id); // filtramos
        verif.channel.push(newChannel.id);
        await verif.save();
    }
    else
        throw new Error("The old channel is not in the list");
};
exports.changeChannel = changeChannel;
const createChannel = async (channel, idioma) => {
    const newChannel = await channel.guild.channels.create(channel.name, {
        type: 'text',
        topic: channel.topic ? channel.topic : "",
        nsfw: channel.nsfw ? true : false,
        parent: channel?.parent ? channel.parent : null,
        permissionOverwrites: channel.permissionOverwrites,
        reason: idioma.creacionCanal
    });
    return newChannel;
};
exports.createChannel = createChannel;
const sendMessages = async (channel, oldChannel) => {
    const verif = await index_1.Messages.findOne({ _id: oldChannel.guild.id, channel: oldChannel.id });
    if (!verif)
        return;
    const webhook = await channel.createWebhook('Backup Message', { reason: 'Backup message' });
    const url = `https://canary.discord.com/api/webhooks/${webhook.id}/${webhook.token}`;
    for (const message of verif.messages.reverse()) {
        await node_fetch_1.default(url, {
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
};
exports.sendMessages = sendMessages;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbERlbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jaGFubmVsRGVsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG1EQUEwRDtBQUMxRCw0REFBK0I7QUFJeEIsTUFBTSxhQUFhLEdBQUcsS0FBSyxFQUFDLFVBQXdCLEVBQUUsVUFBd0IsRUFBRSxFQUFFO0lBQ3JGLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDM0YsTUFBTSxLQUFLLEdBQUcsTUFBTSxlQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDekQsSUFBSSxDQUFDLEtBQUs7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDckUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdkMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVk7UUFDdEYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFBO0tBQ3JCOztRQUFNLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtBQUNoRSxDQUFDLENBQUE7QUFUWSxRQUFBLGFBQWEsaUJBU3pCO0FBRU0sTUFBTSxhQUFhLEdBQUcsS0FBSyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNsRCxNQUFNLFVBQVUsR0FBZ0IsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtRQUM5RSxJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3pDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFDakMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDL0Msb0JBQW9CLEVBQUUsT0FBTyxDQUFDLG9CQUFvQjtRQUNsRCxNQUFNLEVBQUUsTUFBTSxDQUFDLGFBQWE7S0FDL0IsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQyxDQUFBO0FBVlksUUFBQSxhQUFhLGlCQVV6QjtBQUVNLE1BQU0sWUFBWSxHQUFHLEtBQUssRUFBQyxPQUFvQixFQUFFLFVBQXdCLEVBQUUsRUFBRTtJQUNoRixNQUFNLEtBQUssR0FBRyxNQUFNLGdCQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRixJQUFJLENBQUMsS0FBSztRQUFFLE9BQU87SUFDbkIsTUFBTSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUM1RixNQUFNLEdBQUcsR0FBRywyQ0FBMkMsT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckYsS0FBSyxNQUFNLE9BQU8sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQzVDLE1BQU0sb0JBQUssQ0FBQyxHQUFHLEVBQUU7WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtZQUMvQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2dCQUM1QixZQUFZLEVBQUUsT0FBTyxDQUFDLE1BQU07Z0JBQzVCLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTzthQUM3QixDQUFDO1NBQ0wsQ0FBQyxDQUFDO0tBQ04sQ0FBQywwSEFBMEg7SUFDNUgsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFBO0FBakJZLFFBQUEsWUFBWSxnQkFpQnhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFubmVsLCBNZXNzYWdlc30gZnJvbSBcIi4uL2RhdGFiYXNlL21vZGVsL2luZGV4XCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xyXG5cclxuaW1wb3J0IHsgR3VpbGRDaGFubmVsLCBUZXh0Q2hhbm5lbCB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlQ2hhbm5lbCA9IGFzeW5jKG9sZENoYW5uZWw6IEd1aWxkQ2hhbm5lbCwgbmV3Q2hhbm5lbDogR3VpbGRDaGFubmVsKSA9PiB7XHJcbiAgICBpZiAob2xkQ2hhbm5lbC5lcXVhbHMobmV3Q2hhbm5lbCkpIHRocm93IG5ldyBFcnJvcihcIlRoZSBvbGRDaGFubmVsIGFuZCBuZXdDaGFubmVsIGl0cyA9PVwiKTtcclxuICAgIGNvbnN0IHZlcmlmID0gYXdhaXQgQ2hhbm5lbC5maW5kQnlJZChuZXdDaGFubmVsLmd1aWxkLmlkKVxyXG4gICAgaWYgKCF2ZXJpZikgdGhyb3cgbmV3IEVycm9yKFwiTm90IHByb3RlY3RlZCBjaGFubmVscyBpbiB0aGlzIEd1aWxkLlwiKTtcclxuICAgIGlmICh2ZXJpZi5jaGFubmVsLmluY2x1ZGVzKG9sZENoYW5uZWwuaWQpKSB7XHJcbiAgICAgICAgdmVyaWYuY2hhbm5lbCA9IHZlcmlmLmNoYW5uZWwuZmlsdGVyKChpOiBzdHJpbmcpID0+IGkgIT09IG9sZENoYW5uZWwuaWQpOyAvLyBmaWx0cmFtb3NcclxuICAgICAgICB2ZXJpZi5jaGFubmVsLnB1c2gobmV3Q2hhbm5lbC5pZCk7XHJcbiAgICAgICAgYXdhaXQgdmVyaWYuc2F2ZSgpXHJcbiAgICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG9sZCBjaGFubmVsIGlzIG5vdCBpbiB0aGUgbGlzdFwiKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ2hhbm5lbCA9IGFzeW5jKGNoYW5uZWwsIGlkaW9tYSkgPT4ge1xyXG4gICAgY29uc3QgbmV3Q2hhbm5lbDogVGV4dENoYW5uZWwgPSBhd2FpdCBjaGFubmVsLmd1aWxkLmNoYW5uZWxzLmNyZWF0ZShjaGFubmVsLm5hbWUsIHtcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgdG9waWM6IGNoYW5uZWwudG9waWMgPyBjaGFubmVsLnRvcGljIDogXCJcIixcclxuICAgICAgICBuc2Z3OiBjaGFubmVsLm5zZncgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgcGFyZW50OiBjaGFubmVsPy5wYXJlbnQgPyBjaGFubmVsLnBhcmVudCA6IG51bGwsXHJcbiAgICAgICAgcGVybWlzc2lvbk92ZXJ3cml0ZXM6IGNoYW5uZWwucGVybWlzc2lvbk92ZXJ3cml0ZXMsXHJcbiAgICAgICAgcmVhc29uOiBpZGlvbWEuY3JlYWNpb25DYW5hbFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3Q2hhbm5lbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRNZXNzYWdlcyA9IGFzeW5jKGNoYW5uZWw6IFRleHRDaGFubmVsLCBvbGRDaGFubmVsOiBHdWlsZENoYW5uZWwpID0+IHtcclxuICAgIGNvbnN0IHZlcmlmID0gYXdhaXQgTWVzc2FnZXMuZmluZE9uZSh7IF9pZDogb2xkQ2hhbm5lbC5ndWlsZC5pZCwgY2hhbm5lbDogb2xkQ2hhbm5lbC5pZCB9KTtcclxuICAgIGlmICghdmVyaWYpIHJldHVybjtcclxuICAgIGNvbnN0IHdlYmhvb2sgPSBhd2FpdCBjaGFubmVsLmNyZWF0ZVdlYmhvb2soJ0JhY2t1cCBNZXNzYWdlJywgeyByZWFzb246ICdCYWNrdXAgbWVzc2FnZScgfSk7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9jYW5hcnkuZGlzY29yZC5jb20vYXBpL3dlYmhvb2tzLyR7d2ViaG9vay5pZH0vJHt3ZWJob29rLnRva2VufWA7XHJcbiAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgdmVyaWYubWVzc2FnZXMucmV2ZXJzZSgpKSB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBtZXNzYWdlLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJhdmF0YXJfdXJsXCI6IG1lc3NhZ2UuYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IG1lc3NhZ2UuY29udGVudFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSAvLyBIYXJlbW9zIGxhcyBwZXRpY2lvbmVzIG1lZGlhbnRlIGxhIG1pc21hIGFwaSBkZSBkaXNjb3JkIGNvbiBub2RlLWZldGNoIHBhcmEgdW5hIG1heW9yIG9wdGltaXphY2lvbiB5IGV2aXRhciByYXRlLWxpbWl0LlxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59Il19