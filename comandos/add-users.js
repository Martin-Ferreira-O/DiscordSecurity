import registrador from "../model/registrador.js";
export async function run(client, message, args, idioma) {
    if (message.author.id !== message.guild.ownerID) return message.channel.send(idioma.global.onlyOwner);
    const lang = idioma.commands.addUsers;
    const search = await registrador.findOne({ guildId: message.guild.id });
    if (!search) return message.channel.send(idioma.global.noSearch)
    const usuarios = message.mentions.users.first() || await client.users.fetch(args[0]).catch(err => {});
    if (!usuarios) return message.channel.send(lang.noValido)
    if (search.users.includes(usuarios.id)) return message.channel.send(lang.yaEsta);

    await registrador.updateOne({ guildId: message.guild.id }, { $push: { users: usuarios.id } })

    message.channel.send(lang.agregado + usuarios.tag)
}

export const help = {
    name: "Add-users",
    desc: "Añade usuarios a la lista blanca para que puedan ejecutar acciones (Solo gente de extrema confianza).",
    alias: ["añadir-usuarios", "add-user"],
    onlyDev: false
}