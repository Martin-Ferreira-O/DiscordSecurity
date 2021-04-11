import registrador from "../model/registrador.js";
export async function run(client, message, args, idioma) {
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

export const help = {
    name: "Delete-users",
    desc: "Elimina a los usuarios de la lista blanca.",
    alias: ["delete-user", "borrar-usuarios", "unwhitelist"],
    onlyDev: false,
    category: 'admin'
}