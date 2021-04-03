import malicioso from '../model/maliciosos.js';
export async function run(client, message, args, idioma) {
    if (!args[0]) return message.channel.send("No ingresaste ninguna ID");
    const usuario = await client.users.fetch(args[0]).catch(err => {});
    if (!usuario) return message.channel.send("Usuario invalido")
    const search = await malicioso.findOne();
    if (!search) {
        await malicioso.create({ usuarios: [usuario.id] });
        await message.channel.send("No hay ningun array creado, creando..")
    } else {
        if (search.usuarios.includes(usuario.id)) return message.channel.send("Este usuario ya esta en la lista");
        else await search.updateOne({ $push: { usuarios: usuario.id } });
    }
    await message.channel.send("Se agrego al usuario " + usuario.tag)
}

export const help = {
    alias: [],
    onlyDev: true,
    name: "Malicioso"
}