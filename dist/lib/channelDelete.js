"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessages = exports.createChannel = exports.changeChannel = void 0;
const database_1 = require("../database");
const node_fetch_1 = __importDefault(require("node-fetch"));
const changeChannel = async (oldChannel, newChannel) => {
    if (oldChannel.equals(newChannel))
        throw new Error("The oldChannel and newChannel its ==");
    const verif = await database_1.Channel.findById(newChannel.guild.id);
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
    const verif = await database_1.Messages.findOne({ _id: oldChannel.guild.id, channel: oldChannel.id });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbERlbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY2hhbm5lbERlbGV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwQ0FBOEM7QUFDOUMsNERBQStCO0FBSXhCLE1BQU0sYUFBYSxHQUFHLEtBQUssRUFBQyxVQUF3QixFQUFFLFVBQXdCLEVBQUUsRUFBRTtJQUNyRixJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQzNGLE1BQU0sS0FBSyxHQUFHLE1BQU0sa0JBQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN6RCxJQUFJLENBQUMsS0FBSztRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztJQUNyRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN2QyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWTtRQUN0RixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsTUFBTSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUE7S0FDckI7O1FBQU0sTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQ2hFLENBQUMsQ0FBQTtBQVRZLFFBQUEsYUFBYSxpQkFTekI7QUFFTSxNQUFNLGFBQWEsR0FBRyxLQUFLLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ2xELE1BQU0sVUFBVSxHQUFnQixNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQzlFLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDekMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSztRQUNqQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUMvQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsb0JBQW9CO1FBQ2xELE1BQU0sRUFBRSxNQUFNLENBQUMsYUFBYTtLQUMvQixDQUFDLENBQUM7SUFDSCxPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDLENBQUE7QUFWWSxRQUFBLGFBQWEsaUJBVXpCO0FBRU0sTUFBTSxZQUFZLEdBQUcsS0FBSyxFQUFDLE9BQW9CLEVBQUUsVUFBd0IsRUFBRSxFQUFFO0lBQ2hGLE1BQU0sS0FBSyxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTztJQUNuQixNQUFNLE9BQU8sR0FBRyxNQUFNLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQzVGLE1BQU0sR0FBRyxHQUFHLDJDQUEyQyxPQUFPLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyRixLQUFLLE1BQU0sT0FBTyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDNUMsTUFBTSxvQkFBSyxDQUFDLEdBQUcsRUFBRTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixVQUFVLEVBQUUsT0FBTyxDQUFDLFFBQVE7Z0JBQzVCLFlBQVksRUFBRSxPQUFPLENBQUMsTUFBTTtnQkFDNUIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxPQUFPO2FBQzdCLENBQUM7U0FDTCxDQUFDLENBQUM7S0FDTixDQUFDLDBIQUEwSDtJQUM1SCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUE7QUFqQlksUUFBQSxZQUFZLGdCQWlCeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5uZWwsIE1lc3NhZ2VzfSBmcm9tIFwiLi4vZGF0YWJhc2VcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcblxyXG5pbXBvcnQgeyBHdWlsZENoYW5uZWwsIFRleHRDaGFubmVsIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VDaGFubmVsID0gYXN5bmMob2xkQ2hhbm5lbDogR3VpbGRDaGFubmVsLCBuZXdDaGFubmVsOiBHdWlsZENoYW5uZWwpID0+IHtcclxuICAgIGlmIChvbGRDaGFubmVsLmVxdWFscyhuZXdDaGFubmVsKSkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG9sZENoYW5uZWwgYW5kIG5ld0NoYW5uZWwgaXRzID09XCIpO1xyXG4gICAgY29uc3QgdmVyaWYgPSBhd2FpdCBDaGFubmVsLmZpbmRCeUlkKG5ld0NoYW5uZWwuZ3VpbGQuaWQpXHJcbiAgICBpZiAoIXZlcmlmKSB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgcHJvdGVjdGVkIGNoYW5uZWxzIGluIHRoaXMgR3VpbGQuXCIpO1xyXG4gICAgaWYgKHZlcmlmLmNoYW5uZWwuaW5jbHVkZXMob2xkQ2hhbm5lbC5pZCkpIHtcclxuICAgICAgICB2ZXJpZi5jaGFubmVsID0gdmVyaWYuY2hhbm5lbC5maWx0ZXIoKGk6IHN0cmluZykgPT4gaSAhPT0gb2xkQ2hhbm5lbC5pZCk7IC8vIGZpbHRyYW1vc1xyXG4gICAgICAgIHZlcmlmLmNoYW5uZWwucHVzaChuZXdDaGFubmVsLmlkKTtcclxuICAgICAgICBhd2FpdCB2ZXJpZi5zYXZlKClcclxuICAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgb2xkIGNoYW5uZWwgaXMgbm90IGluIHRoZSBsaXN0XCIpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDaGFubmVsID0gYXN5bmMoY2hhbm5lbCwgaWRpb21hKSA9PiB7XHJcbiAgICBjb25zdCBuZXdDaGFubmVsOiBUZXh0Q2hhbm5lbCA9IGF3YWl0IGNoYW5uZWwuZ3VpbGQuY2hhbm5lbHMuY3JlYXRlKGNoYW5uZWwubmFtZSwge1xyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICB0b3BpYzogY2hhbm5lbC50b3BpYyA/IGNoYW5uZWwudG9waWMgOiBcIlwiLFxyXG4gICAgICAgIG5zZnc6IGNoYW5uZWwubnNmdyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICBwYXJlbnQ6IGNoYW5uZWw/LnBhcmVudCA/IGNoYW5uZWwucGFyZW50IDogbnVsbCxcclxuICAgICAgICBwZXJtaXNzaW9uT3ZlcndyaXRlczogY2hhbm5lbC5wZXJtaXNzaW9uT3ZlcndyaXRlcyxcclxuICAgICAgICByZWFzb246IGlkaW9tYS5jcmVhY2lvbkNhbmFsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXdDaGFubmVsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2VzID0gYXN5bmMoY2hhbm5lbDogVGV4dENoYW5uZWwsIG9sZENoYW5uZWw6IEd1aWxkQ2hhbm5lbCkgPT4ge1xyXG4gICAgY29uc3QgdmVyaWYgPSBhd2FpdCBNZXNzYWdlcy5maW5kT25lKHsgX2lkOiBvbGRDaGFubmVsLmd1aWxkLmlkLCBjaGFubmVsOiBvbGRDaGFubmVsLmlkIH0pO1xyXG4gICAgaWYgKCF2ZXJpZikgcmV0dXJuO1xyXG4gICAgY29uc3Qgd2ViaG9vayA9IGF3YWl0IGNoYW5uZWwuY3JlYXRlV2ViaG9vaygnQmFja3VwIE1lc3NhZ2UnLCB7IHJlYXNvbjogJ0JhY2t1cCBtZXNzYWdlJyB9KTtcclxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2NhbmFyeS5kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvJHt3ZWJob29rLmlkfS8ke3dlYmhvb2sudG9rZW59YDtcclxuICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiB2ZXJpZi5tZXNzYWdlcy5yZXZlcnNlKCkpIHtcclxuICAgICAgICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCI6IG1lc3NhZ2UudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBcImF2YXRhcl91cmxcIjogbWVzc2FnZS5hdmF0YXIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogbWVzc2FnZS5jb250ZW50XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IC8vIEhhcmVtb3MgbGFzIHBldGljaW9uZXMgbWVkaWFudGUgbGEgbWlzbWEgYXBpIGRlIGRpc2NvcmQgY29uIG5vZGUtZmV0Y2ggcGFyYSB1bmEgbWF5b3Igb3B0aW1pemFjaW9uIHkgZXZpdGFyIHJhdGUtbGltaXQuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iXX0=