import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;
import lang from '../../database/model/langs.js';
import espanol from '../../lang/espanol.js';
import ingles from '../../lang/english.js';
const prefix = "d!";
import BaseEvent from '../../utils/Structure/Events.js';
export default class MessageEvent extends BaseEvent {
    constructor() {
        super('message');
    }
    async run(client, message) {
        if (message.author.bot) return;
        if (message.guild && !message.channel.permissionsFor(client.user.id).has("SEND_MESSAGES")) return;
        // Para evitar multiples querys a la base de datos lo que haremos es guardar el idioma en el cache del bot, por lo que por servidor solo se haria 1 query a la db

        let idioma;

        if (!client.langCache.has(message.guild.id)) {

            const searchLang = await lang.findOne({ guildId: message.guild.id });

            if (!searchLang) idioma = ingles;
            else searchLang.lang == 'es' ? idioma = espanol : idioma = ingles;
            client.langCache.set(message.guild.id, idioma);

        } else idioma = client.langCache.get(message.guild.id);


        if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setDescription(idioma.events.message.prefix)
                .setAuthor(message.member.displayName, message.author.avatarURL())
                .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }));
            message.channel.send(embed)
        }
        if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
        const args = message.content.substring(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase()
        if (command.length === 0) return;

        // Obtenemos los comandos desde el cache
        const cmd = client.commands.get(command) || client.alias.get(command);
        if (cmd) {
            if (!message.guild.me.permissions.has(["BAN_MEMBERS", "VIEW_AUDIT_LOGS", "CREATE_CHANNELS", "DELETE_CHANNELS"])) return message.channel.send(idioma.events.message.noPerms);
            await cmd.run(client, message, args, idioma);
        }
    }
}