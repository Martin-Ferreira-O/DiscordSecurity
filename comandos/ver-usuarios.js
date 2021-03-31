import registrador from "../model/registrador.js";
export async function run(client, message, args) {

    const search = await registrador.findOne({ guildId: message.guild.id });
    if (!search) return message.channel.send("Para acceder a este comando debes activar el bot")

    let arrayUsuarios = [];
    for (let i = 0; i < search.users.length; i++) {
        const user = await client.users.fetch(search.users[i]);
        arrayUsuarios.push("#" + (i + 1) + " " + user.tag)
    }
    message.channel.send(arrayUsuarios.join("\n"))
}


export const help = {
    name: "Ver-usuarios",
    desc: "Muestra a los usuarios que estan en la lista blanca",
    alias: ["whitelist-view", "white-list-view"]
}