"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database/");
const espanol_1 = __importDefault(require("../../lang/espanol"));
const english_1 = __importDefault(require("../../lang/english"));
const lib_1 = require("../../lib");
class SetLangCommand extends lib_1.CommandBase {
    constructor() {
        // Name, Category, alias, cooldown
        super('set-lang', 'Admin', ["establecer-idioma"], 5);
    }
    async run(bot, message, args) {
        const lang = bot.language.commands.setLang;
        if (!message.member.permissions.has("ADMINISTRATOR"))
            return message.channel.send(bot.language.global.noPerms);
        if (!args[0] || !["en", "es"].includes(args[0].toLowerCase()))
            return message.channel.send(lang.noArgs);
        const selected = args[0].toLowerCase();
        const searchLangs = await database_1.Langs.findById(message.guild.id);
        if (searchLangs && searchLangs.lang === selected)
            return message.channel.send(lang.selected);
        searchLangs ? await searchLangs.updateOne({ lang: selected }) : await database_1.Langs.create({ _id: message.guild.id, lang: selected });
        message.channel.send(lang.cambiado);
        let cacheLang;
        if (selected === 'es')
            cacheLang = espanol_1.default;
        else
            cacheLang = english_1.default;
        bot.lang.set(message.guild.id, cacheLang);
    }
}
exports.default = SetLangCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWxhbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvYWRtaW4vc2V0LWxhbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBc0M7QUFDdEMsaUVBQXlDO0FBQ3pDLGlFQUF5QztBQUN6QyxtQ0FBd0M7QUFHeEMsTUFBcUIsY0FBZSxTQUFRLGlCQUFXO0lBQ25EO1FBQ0ksa0NBQWtDO1FBQ2xDLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFRLEVBQUUsT0FBZ0IsRUFBRSxJQUFtQjtRQUNyRCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7WUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEcsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3RDLE1BQU0sV0FBVyxHQUFHLE1BQU0sZ0JBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRCxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVE7WUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RixXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLGdCQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzlILE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksUUFBUSxLQUFLLElBQUk7WUFBRSxTQUFTLEdBQUcsaUJBQU8sQ0FBQzs7WUFBTSxTQUFTLEdBQUcsaUJBQU8sQ0FBQztRQUNyRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0o7QUFsQkQsaUNBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMYW5nc30gZnJvbSBcIi4uLy4uL2RhdGFiYXNlL1wiO1xyXG5pbXBvcnQgc3BhbmlzaCBmcm9tICcuLi8uLi9sYW5nL2VzcGFub2wnO1xyXG5pbXBvcnQgZW5nbGlzaCBmcm9tICcuLi8uLi9sYW5nL2VuZ2xpc2gnO1xyXG5pbXBvcnQgeyBDb21tYW5kQmFzZSB9IGZyb20gJy4uLy4uL2xpYic7XHJcbmltcG9ydCBCb3QgZnJvbSBcIi4uLy4uL2JvdFwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0TGFuZ0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBOYW1lLCBDYXRlZ29yeSwgYWxpYXMsIGNvb2xkb3duXHJcbiAgICAgICAgc3VwZXIoJ3NldC1sYW5nJywgJ0FkbWluJywgW1wiZXN0YWJsZWNlci1pZGlvbWFcIl0sIDUpXHJcbiAgICB9XHJcbiAgICBhc3luYyBydW4oYm90OiBCb3QsIG1lc3NhZ2U6IE1lc3NhZ2UsIGFyZ3M6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICBjb25zdCBsYW5nID0gYm90Lmxhbmd1YWdlLmNvbW1hbmRzLnNldExhbmc7XHJcbiAgICAgICAgaWYgKCFtZXNzYWdlLm1lbWJlci5wZXJtaXNzaW9ucy5oYXMoXCJBRE1JTklTVFJBVE9SXCIpKSByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQoYm90Lmxhbmd1YWdlLmdsb2JhbC5ub1Blcm1zKTtcclxuICAgICAgICBpZiAoIWFyZ3NbMF0gfHwgIVtcImVuXCIsIFwiZXNcIl0uaW5jbHVkZXMoYXJnc1swXS50b0xvd2VyQ2FzZSgpKSkgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGxhbmcubm9BcmdzKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGFyZ3NbMF0udG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIGNvbnN0IHNlYXJjaExhbmdzID0gYXdhaXQgTGFuZ3MuZmluZEJ5SWQobWVzc2FnZS5ndWlsZC5pZCk7XHJcbiAgICAgICAgaWYgKHNlYXJjaExhbmdzICYmIHNlYXJjaExhbmdzLmxhbmcgPT09IHNlbGVjdGVkKSByZXR1cm4gbWVzc2FnZS5jaGFubmVsLnNlbmQobGFuZy5zZWxlY3RlZCk7XHJcbiAgICAgICAgc2VhcmNoTGFuZ3MgPyBhd2FpdCBzZWFyY2hMYW5ncy51cGRhdGVPbmUoeyBsYW5nOiBzZWxlY3RlZCB9KSA6IGF3YWl0IExhbmdzLmNyZWF0ZSh7IF9pZDogbWVzc2FnZS5ndWlsZC5pZCwgbGFuZzogc2VsZWN0ZWQgfSk7XHJcbiAgICAgICAgbWVzc2FnZS5jaGFubmVsLnNlbmQobGFuZy5jYW1iaWFkbyk7XHJcbiAgICAgICAgbGV0IGNhY2hlTGFuZztcclxuICAgICAgICBpZiAoc2VsZWN0ZWQgPT09ICdlcycpIGNhY2hlTGFuZyA9IHNwYW5pc2g7IGVsc2UgY2FjaGVMYW5nID0gZW5nbGlzaDtcclxuICAgICAgICBib3QubGFuZy5zZXQobWVzc2FnZS5ndWlsZC5pZCwgY2FjaGVMYW5nKTtcclxuICAgIH1cclxufSJdfQ==