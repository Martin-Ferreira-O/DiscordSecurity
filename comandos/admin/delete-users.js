import registrador from "../../database/model/registrador.js";
import BaseCommand from '../../utils/Structure/Command';
export default class DeleteUsersCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('Delete-users', 'Admin', ["delete-user", "borrar-usuarios", "unwhitelist"], 15)
    }
    async run(client, message, args, idioma) {
        const lang = idioma.commands.deleteUsers;
        if (message.author.id !== message.guild.ownerID) return message.channel.send(idioma.global.onlyOwner);

        const search = await registrador.findOne({ guildId: message.guild.id });
        if (!search) return message.channel.send(idioma.global.noSearch)


        if (!args[0]) return message.channel.send(lang.ingresarId);
        const usuarioSacar = await client.users.fetch(args[0]).catch(err => message.channel.send(lang.idValida));
        const arrayDeUsuarios = search.users;
        if (arrayDeUsuarios.length <= 0) return message.channel.send(lang.noUsers);

        if (!arrayDeUsuarios.includes(usuarioSacar)) return message.channel.send(lang.noEncontrado);
        else {
            const indice = arrayDeUsuarios.indexOf(usuarioSacar.id);
            arrayDeUsuarios.splice(indice, 1);
        }

        await registrador.updateOne({ guildId: message.guild.id }, { users: arrayDeUsuarios });
        message.channel.send(usuarioSacar.tag + lang.sacado)

    }
}