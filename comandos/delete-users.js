import registrador from "../model/registrador.js";
export async function run(client, message, args) {
    if (!args[0]) return message.channel.send("Ingresa la ID del usuario");
    const usuarioSacar = await client.users.fetch(args[0]).catch(err => message.channel.send("Ingresa una ID valida."));


    const search = await registrador.findOne({ guildId: message.guild.id });
    if (!search) return message.channel.send("Para acceder a este comando debes activar el bot")

    const arrayDeUsuarios = search.users;
    if (arrayDeUsuarios.length <= 0) return message.channel.send("No hay usuarios");

    if (!arrayDeUsuarios.includes(usuarioSacar)) return message.channel.send("Este usuario no esta en la lista");
    else {
        const indice = arrayDeUsuarios.indexOf(usuarioSacar.id);
        arrayDeUsuarios.splice(indice, 1);
    }

    await registrador.updateOne({ guildId: message.guild.id }, { users: arrayDeUsuarios });
    message.channel.send(usuarioSacar.tag + " fue sacado correctamente.")

}

export const help = {
    name: "Delete-users",
    desc: "Elimina a los usuarios de la lista blanca.",
    alias: ["delete-user", "borrar-usuarios", "unwhitelist"]
}