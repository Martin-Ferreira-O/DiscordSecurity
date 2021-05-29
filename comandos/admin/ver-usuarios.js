import pkg from "discord.js-light";
const { MessageEmbed } = pkg;
import registrador from "../../database/model/registrador.js";
import BaseCommand from '../../utils/Structure/Command';
export default class VewUsuariosCommand extends BaseCommand {
    constructor() {
        super('ver-usuarios', 'Admin', ["whitelist-view", "white-list-view"], 300)
    }
    async run(client, message, args, idioma) {
        const lang = idioma.commands.verUsuarios;
        const search = await registrador.findOne({ guildId: message.guild.id });
        if (!search) return message.channel.send(idioma.global.noSearch)

        let arrayUsuarios = [];
        if (search.users.length <= 0) return message.channel.send(lang.noUsuario)
        for (let i = 0; i < search.users.length; i++) {
            const user = await client.users.fetch(search.users[i]);
            arrayUsuarios.push("#" + (i + 1) + " " + user.tag)
        }
        message.channel.send(new MessageEmbed().setDescription(arrayUsuarios.join("\n")).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })))
    }
}