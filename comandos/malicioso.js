import pkg from 'discord.js-light';
const { MessageEmbed, Util } = pkg;
import malicioso from '../model/maliciosos.js';
export async function run(client, message, args, idioma) {
    if (!args[0]) return message.channel.send("No ingresaste ninguna ID");
    let arrayUsuarios = [];
    let borrado = 0;
    let invalid = 0;
    let repetidos = 0;
    const search = await malicioso.findOne();
    // Esto sera para remover usuarios en la lista
    if (['remove', 'remover', 'quitar'].includes(args[0].toLowerCase())) {
        if (!args[1]) return message.channel.send("`[all]` - `[ID]`")
        if (args[1].toLowerCase() == 'all') return await malicioso.deleteMany({});
        else {
            if (!search) return message.channel.send("No hay ningun usuario en la lista");
            else {
                if (search.users.includes(args[1])) {
                    const index = search.users.indexOf(args[1]);
                    search.users.remove(index, 1);
                    await malicioso.updateOne({}, { usuarios: search });
                    return message.channel.send("Usuario eliminado correctamente")
                } else return message.channel.send('No existe ese usuario en mi base de datos')
            }
        }
    }
    let tiempo1 = Date.now()
    if (!search) return await malicioso.create({ usuarios: [args[0]] });
    const msg = await message.channel.send("Verificando usuarios");
    for (let i = 0; i < args.length; i++) {
        await Util.delayFor(300)
        const usuarioVerificado = await client.users.fetch(args[i]).catch(err => { invalid++ });
        if (usuarioVerificado) {
            if (usuarioVerificado.username.startsWith("Deleted User") && usuarioVerificado.avatar == null) borrado++;
            // Si la cuenta esta borrada que retorne
            if (!search.usuarios.includes(usuarioVerificado.id)) arrayUsuarios.push(usuarioVerificado.id);
            else repetidos++;
            // Si el usuario no esta en la lista que se agrege
        }
    }
    await msg.edit("Agregandolo a la Base de Datos")
    for (let usuario of arrayUsuarios) {
        await search.updateOne({ $push: { usuarios: usuario } })
    }
    const embed = new MessageEmbed()
        .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
        .setTitle("Información")
        .addFields([{
                name: "Usuarios agregados",
                value: arrayUsuarios.length,
                inline: true
            },
            {
                name: "Usuarios con cuenta borrada",
                value: borrado,
                inline: true
            },
            {
                name: "Usuarios invalidos",
                value: invalid,
                inline: true
            },
            {
                name: "Usuarios repetidos",
                value: repetidos,
                inline: true
            }
        ])
        .setFooter(`Completado en ${Date.now() - tiempo1}m`, message.author.avatarURL({ dynamic: true }))
        .setColor("RANDOM")
    await msg.edit("", { embed: embed });
}

export const help = {
    alias: ['bad-user'],
    onlyDev: true,
    name: "Malicioso",
    category: 'dev'
}