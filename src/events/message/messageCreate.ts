import {DMChannel, Message, MessageEmbed, NewsChannel, TextChannel, ThreadChannel} from 'discord.js';
import {Langs} from '../../database/model/index';
import espanol from '../../lang/espanol';
import ingles from '../../lang/english';
const prefix = "d!";
import BaseEvent from '../../utils/Structure/events';
import Bot from '../../bot';
export default class MessageEvent extends BaseEvent {
    constructor() {
        super('messageCreate');
    }
    async run(bot: Bot, message: Message) {
        if (message.author.bot) return;
        if (message.guild && ! (message.channel as TextChannel | NewsChannel | ThreadChannel) .permissionsFor(bot.client.user.id).has("SEND_MESSAGES")) return;
        // Para evitar multiples querys a la base de datos lo que haremos es guardar el idioma en el cache del bot, por lo que por servidor solo se haria 1 query a la db

        let idioma;

        if (!bot.langCache.has(message.guild.id)) {

            const searchLang = await Langs.findById(message.guild.id);

            if (!searchLang) idioma = ingles;
            else searchLang.lang == 'es' ? idioma = espanol : idioma = ingles;
            bot.langCache.set(message.guild.id, idioma);

        } else idioma = bot.langCache.get(message.guild.id);


        if (message.content.match(new RegExp(`^<@!?${bot.client.user.id}>( |)$`))) {
            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(idioma.events.message.prefix)
                .setAuthor(message.member.displayName, message.author.avatarURL())
                .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }));
            message.channel.send({embeds: [embed]});
        }
        if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
        const args = message.content.substring(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase()
        if (command.length === 0) return;

        // Obtenemos los comandos desde el cache
        const cmd = bot.commands.get(command);
        if (cmd) {
            if (!message.guild.me.permissions.has(["BAN_MEMBERS", "VIEW_AUDIT_LOG", "MANAGE_CHANNELS"])) return message.channel.send(idioma.events.message.noPerms);
            if (cmd.category === "dev" && message.author.id !== process.env.DEVELOPER) return false;
            await cmd.run(bot, message, args, idioma);
        }
    }
}