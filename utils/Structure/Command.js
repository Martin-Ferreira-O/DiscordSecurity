import { Message, MessageEmbed } from 'discord.js';
export default class CommandBase {
    /**
     * The base of the command
     * @param {String} name Name of the command 
     * @param {String} category Name of the category 
     * @param {String[]} alias Array of alias 
     * @param {Number} cooldown The cooldown of the command 
     */
    constructor(name, category, alias, cooldown) {
            this.name = name;
            this.category = category;
            this.alias = alias;
            this.cooldown = cooldown;
        }
        /**
         * Enviaras un embed en el canal del mensaje.
         * @param {Message} message Clase Message
         * @param {String} content Contenido del embed
         */
    sendEmbed(message, content) {
        if (!message || !content) throw new Error("No ingresaste los parametros.");
        if (!message instanceof Message) throw new Error("El primer argumento debe instancear de la clase Message");
        if (typeof content != 'string') throw new Error("El contenido debe ser un tipo String");
        const embed = new MessageEmbed()
            .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setDescription(content)
            .setFooter(message.member.displayName, message.author.avatarURL({ dynamic: true }));
        message.channel.send(embed)
    }
}