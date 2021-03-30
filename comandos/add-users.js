import { findOne, updateOne } from "../model/registrador";
export async function run(client, message, args) {
    if (!args[0]) return message.channel.send("Ingrese una ID o un username valido ")
    const search = await findOne({ guildId: message.guild.id });
    if (!search) return message.channel.send("Para acceder a este comando debes activar el bot")

    const usuarios = message.mentions.users.first() || client.users.cache.get(args[0]) || client.users.cache.find(user => user.username.toLowerCase() == args.join(" ").toLowerCase() || user.tag.toLowerCase() == args.join(" ").toLowerCase() || user.discriminator == args.join(" "));
    if (!usuarios) return message.channel.send("Ingrese una ID o un username valido")
    const arrayDeUsuarios = search.users;
    if (arrayDeUsuarios.includes(usuarios.id)) return message.channel.send("Este usuario ya esta en la lista");

    await updateOne({ guildId: message.guild.id }, { $push: { users: usuarios.id } })

    message.channel.send("Listo, se agregaron a la lista el usuario: " + usuarios.tag)
}

export const help = {
    name: "Add-users",
    desc: "Añade usuarios a la lista blanca para que puedan ejecutar acciones (Solo gente de extrema confianza).",
    alias: ["añadir-usuarios", "add-user"]
}