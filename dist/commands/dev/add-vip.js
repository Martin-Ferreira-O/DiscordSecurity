"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database/");
const moment_1 = __importDefault(require("moment"));
const lib_1 = require("../../lib");
class AddVip extends lib_1.CommandBase {
    constructor() {
        // Name, Category, alias, cooldown
        super('add-vip', 'dev', ['añadir-vip'], 1);
    }
    async run(bot, message, args) {
        if (!args[0])
            return message.channel.send("Please provide a argument.\nUse: `d!add-vip <Guild> <Licence> <Buyer>`");
        const guild = await bot.client.guilds.fetch(`${BigInt(args[0])}`).catch(() => null);
        if (!guild)
            return message.channel.send("Guild invalid!");
        const searchGuild = await database_1.Vip.findById({ guildId: guild.id });
        if (searchGuild)
            return message.channel.send("This guild has the licence " + searchGuild.licence);
        else {
            const licence = args[1].toLowerCase();
            const buyer = await bot.client.users.fetch(`${BigInt(args[2])}`).catch(() => null);
            if (!buyer)
                return message.channel.send('Please provide a valid buyer\nUse: `d!add-vip <Guild> <Licence> <Buyer>`');
            if (!['vip1', 'vip2', 'vip3'].includes(licence))
                return message.channel.send('Please provide a valid license. `Vip1, vip2, vip3`\nUse: `d!add-vip <Guild> <Licence> <Buyer>`');
            const now = new Date();
            const date = new Date(now.setDate(now.getDate() + 30));
            await database_1.Vip.create({
                guildId: guild.id,
                time: date,
                buyer: buyer,
                licence: licence
            });
            message.channel.send('¡The licence has created!. Ends in: ' + moment_1.default(date).format('L'));
        }
    }
}
exports.default = AddVip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXZpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9kZXYvYWRkLXZpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUFvQztBQUNwQyxvREFBNEI7QUFDNUIsbUNBQXdDO0FBR3hDLE1BQXFCLE1BQU8sU0FBUSxpQkFBVztJQUMzQztRQUNJLGtDQUFrQztRQUNsQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQVEsRUFBRSxPQUFnQixFQUFFLElBQW1CO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO1FBRXBILE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDMUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxjQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlELElBQUksV0FBVztZQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdGO1lBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3RDLE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEYsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwRUFBMEUsQ0FBQyxDQUFBO1lBQ25ILElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdHQUFnRyxDQUFDLENBQUM7WUFFL0ssTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtZQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBRXRELE1BQU0sY0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDYixPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxLQUFLO2dCQUNaLE9BQU8sRUFBRSxPQUFPO2FBQ25CLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxHQUFHLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0Y7SUFDTCxDQUFDO0NBQ0o7QUE5QkQseUJBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWaXB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9cIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBDb21tYW5kQmFzZSB9IGZyb20gJy4uLy4uL2xpYic7XHJcbmltcG9ydCBCb3QgZnJvbSBcIi4uLy4uL2JvdFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkVmlwIGV4dGVuZHMgQ29tbWFuZEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gTmFtZSwgQ2F0ZWdvcnksIGFsaWFzLCBjb29sZG93blxyXG4gICAgICAgIHN1cGVyKCdhZGQtdmlwJywgJ2RldicsIFsnYcOxYWRpci12aXAnXSwgMSlcclxuICAgIH1cclxuICAgIGFzeW5jIHJ1bihib3Q6IEJvdCwgbWVzc2FnZTogTWVzc2FnZSwgYXJnczogQXJyYXk8c3RyaW5nPikge1xyXG4gICAgICAgIGlmICghYXJnc1swXSkgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKFwiUGxlYXNlIHByb3ZpZGUgYSBhcmd1bWVudC5cXG5Vc2U6IGBkIWFkZC12aXAgPEd1aWxkPiA8TGljZW5jZT4gPEJ1eWVyPmBcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZ3VpbGQgPSBhd2FpdCBib3QuY2xpZW50Lmd1aWxkcy5mZXRjaChgJHtCaWdJbnQoYXJnc1swXSl9YCkuY2F0Y2goKCkgPT4gbnVsbCk7XHJcbiAgICAgICAgaWYgKCFndWlsZCkgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKFwiR3VpbGQgaW52YWxpZCFcIik7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoR3VpbGQgPSBhd2FpdCBWaXAuZmluZEJ5SWQoeyBndWlsZElkOiBndWlsZC5pZCB9KTtcclxuICAgICAgICBpZiAoc2VhcmNoR3VpbGQpIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZChcIlRoaXMgZ3VpbGQgaGFzIHRoZSBsaWNlbmNlIFwiICsgc2VhcmNoR3VpbGQubGljZW5jZSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpY2VuY2UgPSBhcmdzWzFdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1eWVyID0gYXdhaXQgYm90LmNsaWVudC51c2Vycy5mZXRjaChgJHtCaWdJbnQoYXJnc1syXSl9YCkuY2F0Y2goKCkgPT4gbnVsbClcclxuICAgICAgICAgICAgaWYgKCFidXllcikgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKCdQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGJ1eWVyXFxuVXNlOiBgZCFhZGQtdmlwIDxHdWlsZD4gPExpY2VuY2U+IDxCdXllcj5gJylcclxuICAgICAgICAgICAgaWYgKCFbJ3ZpcDEnLCAndmlwMicsICd2aXAzJ10uaW5jbHVkZXMobGljZW5jZSkpIHJldHVybiBtZXNzYWdlLmNoYW5uZWwuc2VuZCgnUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBsaWNlbnNlLiBgVmlwMSwgdmlwMiwgdmlwM2BcXG5Vc2U6IGBkIWFkZC12aXAgPEd1aWxkPiA8TGljZW5jZT4gPEJ1eWVyPmAnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgKyAzMCkpXHJcblxyXG4gICAgICAgICAgICBhd2FpdCBWaXAuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGd1aWxkSWQ6IGd1aWxkLmlkLFxyXG4gICAgICAgICAgICAgICAgdGltZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgIGJ1eWVyOiBidXllcixcclxuICAgICAgICAgICAgICAgIGxpY2VuY2U6IGxpY2VuY2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKCfCoVRoZSBsaWNlbmNlIGhhcyBjcmVhdGVkIS4gRW5kcyBpbjogJyArIG1vbWVudChkYXRlKS5mb3JtYXQoJ0wnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19