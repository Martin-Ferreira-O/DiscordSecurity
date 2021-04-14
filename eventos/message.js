import pkg from 'discord.js-light';
const { MessageEmbed, Collection } = pkg;
import lang from '../model/langs.js';
import espanol from '../lang/espanol.js';
import ingles from '../lang/english.js';
const prefix = "d!";
export default async(client, message) => {
    if (message.author.bot) return;
    if (message.guild && !message.channel.permissionsFor(client.user.id).has("SEND_MESSAGES")) return;
    const { cooldowns } = client;
    // Para evitar multiples querys a la base de datos lo que haremos es guardar el idioma en el cache del bot, por lo que por servidor solo se haria 1 query a la db

    let idioma;
    if (!client.idiomasCache.has(message.guild.id)) {
        const searchLang = await lang.findOne({ guildId: message.guild.id });
        if (!searchLang) idioma = ingles;
        else searchLang.lang == 'es' ? idioma = espanol : idioma = ingles;
        client.idiomasCache.set(message.guild.id, idioma);
    } else idioma = client.idiomasCache.get(message.guild.id);
    // Si el mensaje es una mencion al bot respondera con el prefijo
    try {
        if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
            const embed = new MessageEmbed()
                .setColor("#33333")
                .setDescription(idioma.events.message.prefix)
                .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            message.channel.send(embed)
        }
        // Si el mensaje no comienza con el prefix retorna
        if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase()
        if (command.length === 0) return;

        // Obtenemos los comandos desde el cache
        let cmd = client.comandos.get(command) || client.alias.get(command);
        if (!cmd) return;
        // Si el comando es solo para desarrolladores retorna



        if (!cooldowns.has(cmd.help.name)) {
            cooldowns.set(cmd.help.name, new Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(cmd.help.name);
        const cooldownAmount = (cmd.help.cooldown || 5) * 1000;

        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if (now < expirationTime && ["733060948209696819", "757099169180811355"].includes(message.author.id)) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${cmd.help.name}\` command.`);
            }
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
        if (cmd.help.dev) {
            if (!["757099169180811355", "733060948209696819"].includes(message.author.id)) return message.channel.send("Solo los desarrolladores pueden usar este comando")
        }
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send(idioma.events.message.noPerms)
        await cmd.run(client, message, args, idioma)

    } catch (error) {
        console.log(error)
        message.channel.send(idioma.events.message.error)
    } finally {
        message.channel.stopTyping(true);
    }
};