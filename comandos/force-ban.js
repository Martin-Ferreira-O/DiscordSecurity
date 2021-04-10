import badUsers from "../model/maliciosos.js";
import Discord from "discord.js-light";
export async function run(client, message, args, idioma) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(idioma.global.noPerms);
    const lenguaje = idioma.commands.forceban;
    const users = await badUsers.findOne();
    if (!users) return message.channel.send(lenguaje.noUsers)
    const msg = await message.channel.send(lenguaje.baneado);
    let usuarioBaneado;
    let noBans = 0;
    let baneados = 0;
    for (usuarioBaneado of users.usuarios) {
        await Discord.Util.delayFor(5000)
        await message.guild.members.ban(usuarioBaneado, { days: 7, reason: lenguaje.reason }).catch(err => { noBans++ });
        baneados++;
    };
    const embed = new Discord.MessageEmbed()
        .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
        .setDescription(lenguaje.desc)
        .addFields([{
                name: lenguaje.ready,
                value: (baneados - noBans),
                inline: true
            },
            {
                name: lenguaje.errores,
                value: noBans,
                inline: true
            }
        ]);
    await msg.edit(embed)
}
export const help = {
    name: "Force-ban",
    alias: ["forceban"],
    onlyDev: false
}