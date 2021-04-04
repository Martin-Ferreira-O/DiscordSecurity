import malicioso from '../model/maliciosos.js';
export async function run(client, message, args, idioma) {
    if (!args[0]) return message.channel.send("No ingresaste ninguna ID");
    const msg = await message.channel.send("Cargando <a:loading:796854840734253096>");
    let arrayUsuarios = [];
    const search = await malicioso.findOne();

    if (!search) return await malicioso.create({ usuarios: [args[0]] });

    for (let i = 0; i < args.length; i++) {
        const usuarioVerificado = await client.users.fetch(args[i]).catch(err => {});
        if (usuarioVerificado && !search.usuarios.includes(usuarioVerificado.id)) arrayUsuarios.push(usuarioVerificado.id);
    }

    for (let usuario of arrayUsuarios) {
        await search.updateOne({ $push: { usuarios: usuario } })
    }
    await msg.edit('Se agregragon ' + arrayUsuarios.length + " usuarios a la lista!")
}

export const help = {
    alias: [],
    onlyDev: true,
    name: "Malicioso"
}