import { MessageEmbed } from "discord.js";
const noRepetir = new Set();
import registrador from '../model/registrador.js';
export async function run(client, message, args) {
    if (noRepetir.has(message.author.id)) return;
    noRepetir.add(message.author.id);

    /**
     * Funcion para guardar los datos
     * @param {Boolean} pregunta1 Si solo el dueño borra canales 
     * @param {String} pregunta2 Canal a enviar logs 
     * @param {Boolean} pregunta3 Usuarios detecados ban auto 
     * @param {Array} usuarios Usuarios los cuales pueden usar el bot 
     * @param {Object} message Evento message
     */


    async function verificar(pregunta1, pregunta2, pregunta3, usuarios, message) {
        const esquema = new registrador({
            guildId: message.guild.id,
            autoban: pregunta3, // Si los usuarios detectados seran baneados automaticamente
            channel: pregunta2, // Canal a enviar logs
            users: usuarios, // Usuarios permitidos
            extrem: pregunta1 // Si solo el dueño puede borrar canales
        });
        const buscarEsquemas = await registrador.findOne({ guildId: message.guild.id });
        buscarEsquemas ? await registrador.updateOne({ guildId: message.guild.id }, { autoban: pregunta3, channel: pregunta2, users: usuarios, extrem: pregunta1 }) : await esquema.save();
    }


    let i = 0;
    let usuariosAñadir = []; // Usuarios que se añaden
    let pregunta1; // Modo extremo
    let pregunta2; // Canal a enviar registros
    let pregunta3; // Detectar usuarios maliciosos y banearlos automaticamente
    const primerEmbedResponder = new MessageEmbed()
        .setTitle("Respuestas interactivas!")
        .setFooter("Escribe tu respuesta. | Si quieres cancelar la configuración escribe `exit`")
        .setDescription('Menciona a los usuarios que podran usar este bot\nEscribe sus IDs | Escribe listo si ya los agregaste o no quieras agregar a nadie')
        .setColor('#16E724')
    message.channel.send(primerEmbedResponder);

    const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id, { idle: 120000 });
    const mensajeDeError = new MessageEmbed().setDescription('Introduzca un valor válido').setFooter("Si quieres cancelar la configuración escribe `exit`").setColor('#E70916')
    collector.on("collect", async(m) => {
        if (m.content.toLowerCase() === "exit")
            return collector.stop("Exited");
        switch (i) {
            case 0:
                if (m.content.toLowerCase() == 'listo') {
                    i++
                } else if (m.content) {
                    const usuario = m.mentions.users.first() || (await client.users.fetch(m.content)).catch(err => {
                        if (err.message.includes("Unknown")) return message.channel.send(mensajeDeError);
                        else if (err.message.includes("404")) return message.channel.send(mensajeDeError);
                        else console.log(err)
                    });
                    if (usuariosAñadir.includes(usuario.id)) return m.react('❌');
                    usuariosAñadir.push(usuario.id)
                    m.react('✅')
                    break;
                } else {
                    await message.channel.send(mensajeDeError);
                }
                await message.channel.send(new MessageEmbed().setDescription('¿Quieres activar el modo extremo?\nSolo el dueño y los usuarios agregados anteriormente podran borrar y crear canales. `Si` | `No`').setFooter('Si quieres cancelar la configuración escribe `exit`').setColor('#16E724'))
                break;



            case 1:
                if (m.content.toLowerCase() == 'si') {
                    pregunta1 = true;
                    i++
                } else if (m.content.toLowerCase() == 'no') {
                    pregunta1 = false;
                    i++
                } else {
                    return message.channel.send("Esto es una respuesta de si y no, intentalo denuevo")
                }
                await message.channel.send("¿A que canal deberia enviar los registros de ataque?")
                break;
            case 2:
                const canal = m.mentions.channels.first() || (await client.channels.fetch(m.content).catch(err => {
                    if (err.message.includes("Unknown")) return message.channel.send(mensajeDeError);
                    else if (err.message.includes("404")) return message.channel.send(mensajeDeError);
                    else console.log(err)
                }));
                if (canal.guild != m.guild) return message.channel.send('El canal mencionado no esta en este servidor');
                pregunta2 = canal.id;
                i++;
                await message.channel.send('¿Quieres que cada ves que entre un usuario malicioso se le banee automaticamente? `Si` | `No`')
                break;

            case 3:
                if (m.content.toLowerCase() == 'si') {
                    i++;
                } else if (m.content.toLowerCase() == 'no') {
                    i++
                } else {
                    return message.channel.send('Debes ingresar una respuesta de si o no')
                }
                collector.stop("Finished");
                break;
        };
    });

    collector.on("end", async(collected, reason) => {
        noRepetir.delete(message.author.id);
        /*
            usuariosAñadir son los usuarios a agregar 


            let pregunta1; = Si es el modo extremo o no.
            let pregunta2 = canal a enviar registros
            let pregunta3 = Banear usuarios maliciosos
        */
        try {
            const nuevoCanal = await client.channels.fetch(pregunta2);
            const embedFinish = new MessageEmbed()
                .setTitle("Configuración completada.")
                .setDescription("La configuración ha sido completada con exito.")
                .addField("Usuarios agregados", usuariosAñadir.length)
                .addField("¿Modo extremo?", pregunta1 ? "Si" : "No")
                .addField("Canal a enviar registros", nuevoCanal.toString())
                .addField("¿Banear usuarios maliciosos?", pregunta3 ? "Si" : "No")
                .setColor('#16E724')
            switch (reason) {
                case 'Finished':
                    await verificar(pregunta1, pregunta2, pregunta3, usuariosAñadir, message)
                    await message.channel.send(embedFinish)
                    break;
                case 'idle':
                    message.channel.send("El tiempo para responder ha terminado.");
                    break;
                default:
                    if (reason == 'Exited') return message.channel.send('Configuración interactiva apagada.');
                    message.channel.send("El colector paro porqué: " + reason).catch(() => {});
                    break;
            }
        } catch (error) {
            message.channel.send('Error, aca tienes mas información. ' + error)
            console.log(error)
        } finally {
            noRepetir.delete(message.author.id);
        }
    });

}

export const help = {
    alias: [],
    name: "setup",
    example: "t/setup"
}