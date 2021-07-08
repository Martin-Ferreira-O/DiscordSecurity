import Bot from '../../bot';
import { MessageEmbed, Util, Message } from 'discord.js';;
import {Malicioso} from '../../database/model/index';
import BaseCommand from '../../utils/Structure/command';
export default class MaliciosoCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('malicioso', 'dev', ['bad-user', 'add-malicius-user'], 3)
    }
    async run(bot: Bot, message: Message, args: Array<string>, idioma) {
        if (!args[0]) return message.channel.send("No ingresaste ninguna ID");
        let arrayUsuarios = [];
        let borrado = 0;
        let invalid = 0;
        let repetidos = 0;
        const search = await Malicioso.findOne();
        // Esto sera para remover usuarios en la lista
        if (['remove', 'remover', 'quitar'].includes(args[0].toLowerCase())) {
            if (!args[1]) return message.channel.send("`[all]` - `[ID]`")
            if (args[1].toLowerCase() == 'all') return await Malicioso.deleteMany({});
            else {
                if (!search) return message.channel.send("No hay ningun usuario en la lista");
                else {
                    if (search.usuarios.includes(args[1])) {
                        const index = search.usuarios.indexOf(args[1]);
                        search.usuarios.splice(index, 1);
                        await search.save();
                        return message.channel.send("Usuario eliminado correctamente")
                    } else return message.channel.send('No existe ese usuario en mi base de datos')
                }
            }
        }

        let tiempo1 = Date.now()
        if (!search) return await Malicioso.create({ usuarios: [args[0]] });
        const msg = await message.channel.send("Verificando usuarios");
        for (let i = 0; i < args.length; i++) {
            await Util.delayFor(300)
            const usuarioVerificado = bot.client.users.cache.get(`${BigInt(args[i])}`) || await bot.client.users.fetch(`${BigInt(args[i])}`).catch((_) => { invalid++ });
            if (usuarioVerificado) {
                if (usuarioVerificado.username.startsWith("Deleted User") && usuarioVerificado.avatar == null) borrado++;
                // Si la cuenta esta borrada que retorne
                if (!search.usuarios.includes(usuarioVerificado.id)) arrayUsuarios.push(usuarioVerificado.id);
                else repetidos++;
                // Si el usuario no esta en la lista que se agrege
            }
        }

        search.usuarios = search.usuarios.concat(arrayUsuarios);
        await search.save();
        const embed = new MessageEmbed()
            .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
            .setTitle("Información")
            .addFields({
                    name: "Usuarios agregados",
                    value: `${arrayUsuarios.length}`,
                    inline: true
                },
                {
                    name: "Usuarios con cuenta borrada",
                    value: `${borrado}`,
                    inline: true
                },
                {
                    name: "Usuarios invalidos",
                    value: `${invalid}`,
                    inline: true
                },
                {
                    name: "Usuarios repetidos",
                    value: `${repetidos}`,
                    inline: true
                }
            )
            .setFooter(`Completado en ${Date.now() - tiempo1}ms`, message.author.avatarURL({ dynamic: true }))
            .setColor("RANDOM")
        await msg.edit({ embeds: [embed], content: "Done." });
    }
}