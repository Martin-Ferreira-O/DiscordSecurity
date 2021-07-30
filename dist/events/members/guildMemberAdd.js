"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const espanol_1 = __importDefault(require("../../lang/espanol"));
const english_1 = __importDefault(require("../../lang/english"));
const database_1 = require("../../database/");
const lib_1 = require("../../lib");
class MemberAddEvent extends lib_1.BaseEvent {
    constructor() {
        super('guildMemberAdd');
    }
    async run(bot, member) {
        let idioma;
        const querisMongo = await Promise.all([database_1.Registrador.findById(member.guild.id), database_1.Malicioso.findOne(), database_1.Langs.findById(member.guild.id)]);
        if (!querisMongo[0])
            return;
        if (querisMongo[2]) {
            if (querisMongo[2].lang == 'es')
                idioma = espanol_1.default;
            else
                idioma = english_1.default;
        }
        else
            idioma = english_1.default;
        const lenguaje = idioma.events.memberAdd;
        const canal = await bot.client.channels.fetch(`${BigInt(querisMongo[0].channel)}`).catch(() => { });
        if (querisMongo[1].usuarios.includes(member.id)) {
            const banned = await member.ban({ reason: lenguaje.reason }).catch((_) => { canal.send(lenguaje.error.replace("%user%", member.user.tag)); });
            if (!banned)
                canal.send(member.user.tag + lenguaje.texto).catch(() => { });
        }
        else
            return;
    }
}
exports.default = MemberAddEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGRNZW1iZXJBZGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXZlbnRzL21lbWJlcnMvZ3VpbGRNZW1iZXJBZGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRUFBeUM7QUFDekMsaUVBQXdDO0FBQ3hDLDhDQUE4RDtBQUM5RCxtQ0FBc0M7QUFHdEMsTUFBcUIsY0FBZSxTQUFRLGVBQVM7SUFDakQ7UUFDSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFRLEVBQUUsTUFBbUI7UUFDbkMsSUFBSSxNQUFNLENBQUM7UUFDWCxNQUFNLFdBQVcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxzQkFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLG9CQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsZ0JBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPO1FBQzVCLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJO2dCQUFFLE1BQU0sR0FBRyxpQkFBTyxDQUFDOztnQkFDN0MsTUFBTSxHQUFHLGlCQUFNLENBQUM7U0FDeEI7O1lBQU0sTUFBTSxHQUFHLGlCQUFNLENBQUM7UUFDdkIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDekMsTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFnQixDQUFDO1FBQ2xILElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQzdDLE1BQU0sTUFBTSxHQUFHLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdJLElBQUksQ0FBQyxNQUFNO2dCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztTQUM3RTs7WUFBTSxPQUFPO0lBQ2xCLENBQUM7Q0FDSjtBQW5CRCxpQ0FtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXNwYW5vbCBmcm9tICcuLi8uLi9sYW5nL2VzcGFub2wnO1xyXG5pbXBvcnQgaW5nbGVzIGZyb20gJy4uLy4uL2xhbmcvZW5nbGlzaCc7XHJcbmltcG9ydCB7UmVnaXN0cmFkb3IsIE1hbGljaW9zbywgTGFuZ3N9IGZyb20gJy4uLy4uL2RhdGFiYXNlLyc7XHJcbmltcG9ydCB7IEJhc2VFdmVudCB9IGZyb20gJy4uLy4uL2xpYic7XHJcbmltcG9ydCBCb3QgZnJvbSAnLi4vLi4vYm90JztcclxuaW1wb3J0IHsgR3VpbGRNZW1iZXIsIFRleHRDaGFubmVsIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbWJlckFkZEV2ZW50IGV4dGVuZHMgQmFzZUV2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdndWlsZE1lbWJlckFkZCcpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcnVuKGJvdDogQm90LCBtZW1iZXI6IEd1aWxkTWVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGlkaW9tYTtcclxuICAgICAgICBjb25zdCBxdWVyaXNNb25nbyA9IGF3YWl0IFByb21pc2UuYWxsKFtSZWdpc3RyYWRvci5maW5kQnlJZChtZW1iZXIuZ3VpbGQuaWQpLCBNYWxpY2lvc28uZmluZE9uZSgpLCBMYW5ncy5maW5kQnlJZChtZW1iZXIuZ3VpbGQuaWQpXSk7XHJcbiAgICAgICAgaWYgKCFxdWVyaXNNb25nb1swXSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChxdWVyaXNNb25nb1syXSkge1xyXG4gICAgICAgICAgICBpZiAocXVlcmlzTW9uZ29bMl0ubGFuZyA9PSAnZXMnKSBpZGlvbWEgPSBlc3Bhbm9sO1xyXG4gICAgICAgICAgICBlbHNlIGlkaW9tYSA9IGluZ2xlcztcclxuICAgICAgICB9IGVsc2UgaWRpb21hID0gaW5nbGVzO1xyXG4gICAgICAgIGNvbnN0IGxlbmd1YWplID0gaWRpb21hLmV2ZW50cy5tZW1iZXJBZGQ7XHJcbiAgICAgICAgY29uc3QgY2FuYWwgPSBhd2FpdCBib3QuY2xpZW50LmNoYW5uZWxzLmZldGNoKGAke0JpZ0ludChxdWVyaXNNb25nb1swXS5jaGFubmVsKX1gKS5jYXRjaCgoKSA9PiB7fSkgYXMgVGV4dENoYW5uZWw7XHJcbiAgICAgICAgaWYgKHF1ZXJpc01vbmdvWzFdLnVzdWFyaW9zLmluY2x1ZGVzKG1lbWJlci5pZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgYmFubmVkID0gYXdhaXQgbWVtYmVyLmJhbih7IHJlYXNvbjogbGVuZ3VhamUucmVhc29uIH0pLmNhdGNoKChfKSA9PiB7IGNhbmFsLnNlbmQobGVuZ3VhamUuZXJyb3IucmVwbGFjZShcIiV1c2VyJVwiLCBtZW1iZXIudXNlci50YWcpKSB9KTtcclxuICAgICAgICAgICAgaWYgKCFiYW5uZWQpIGNhbmFsLnNlbmQobWVtYmVyLnVzZXIudGFnICsgbGVuZ3VhamUudGV4dG8pLmNhdGNoKCgpID0+IHt9KTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuO1xyXG4gICAgfVxyXG59Il19