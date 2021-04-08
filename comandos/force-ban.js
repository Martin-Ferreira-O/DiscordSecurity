import badUsers from "../model/maliciosos.js";
import Discord from "discord.js-light";
export async function run(client, message, args, idioma) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(idioma.global.noPerms);
    const lenguaje = idioma.commands.forceban;
    const users = await badUsers.findOne();
    if (!users) return message.channel.send(lenguaje.noUsers)
    const msg = await message.channel.send(lenguaje.baneado);
    let usuarioBaneado;
    for (usuarioBaneado of users.usuarios) {
        await Discord.Util.delayFor(5000)
        await message.guild.members.ban(usuarioBaneado, { days: 7, reason: lenguaje.reason });
    };
    await msg.edit(baneados + lenguaje.ready)
}

export const help = {
    name: "Force-ban",
    alias: ["forceban"],
    onlyDev: false
}