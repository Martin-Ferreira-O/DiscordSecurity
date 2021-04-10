import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;
const noRepetir = new Set();
import registrador from '../model/registrador.js';
export async function run(client, message, args, idioma) {
    if (message.author.id !== message.guild.ownerID) return message.channel.send(idioma.global.onlyOwner);
    if (noRepetir.has(message.author.id)) return;
    noRepetir.add(message.author.id);
    const lang = idioma.commands.setup;
    const words = ["listo", "skip", "ready"];
    const wordsSi = ["si", "yes"]
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
        .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
        .setFooter(lang.footer1)
        .setDescription(lang.descripcion1)
        .setColor('#16E724')
    message.channel.send(primerEmbedResponder);
    let catc = false;
    const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id, { idle: 120000 });
    const mensajeDeError = new MessageEmbed().setDescription(lang.mensajeError).setFooter(lang.footerError).setColor('#E70916').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
    collector.on("collect", async(m) => {
        if (m.content.toLowerCase() === "exit")
            return collector.stop("Exited");
        switch (i) {
            case 0:
                if (words.includes(m.content.toLowerCase())) {
                    i++
                } else if (m.content) {

                    const usuario = m.mentions.users.first() || await client.users.fetch(m.content).catch(err => {
                        if (err.message.includes("Unknown")) return message.channel.send(mensajeDeError);
                        else if (err.message.includes("404")) return message.channel.send(mensajeDeError);
                        else if (err.message.includes("DiscordAPIError")) return message.channel.send(mensajeDeError);
                        else {
                            message.channel.send(mensajeDeError)
                            catc = true;
                        }
                    });

                    if (catc) return;
                    if (usuariosAñadir.includes(usuario.id)) return m.react('❌');
                    usuariosAñadir.push(usuario.id)
                    m.react('✅')
                    break;
                } else {
                    await message.channel.send(mensajeDeError);
                }
                await message.channel.send(new MessageEmbed().setDescription(lang.mensajeExtremo).setFooter(lang.footer1).setColor('#16E724').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })))
                break;



            case 1:
                if (wordsSi.includes(m.content.toLowerCase())) {
                    pregunta1 = true;
                    i++
                } else if (m.content.toLowerCase() == 'no') {
                    pregunta1 = false;
                    i++
                } else {
                    return message.channel.send(lang.respuestaSiNo)
                }
                await message.channel.send(new MessageEmbed().setDescription(lang.canalEnviar).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor("D30089"))
                break;
            case 2:
                const canal = m.mentions.channels.first() || (await client.channels.fetch(m.content).catch(err => {
                    if (err.message.includes("Unknown")) return message.channel.send(mensajeDeError);
                    else if (err.message.includes("404")) return message.channel.send(mensajeDeError);
                    else if (err.message.includes("DiscordAPIError")) return message.channel.send(mensajeDeError);
                    else {
                        message.channel.send(mensajeDeError)
                        catc = true;
                    }
                    if (catc) return;
                }));
                if (canal.guild != m.guild) return message.channel.send(new MessageEmbed().setDescription(lang.noServer).setColor("D30089").setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })));
                pregunta2 = canal.id;
                i++;
                await message.channel.send(new MessageEmbed().setDescription(lang.autoBan).setColor("D30089").setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })))
                break;

            case 3:
                if (wordsSi.includes(m.content.toLowerCase())) {
                    i++;
                    pregunta3 = true;
                } else if (m.content.toLowerCase() == 'no') {
                    i++
                    pregunta3 = false;
                } else {
                    return message.channel.send(new MessageEmbed().setDescription(lang.respuestaSiNo).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor("#EE4BB5"))
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
                .setTitle(lang.title2)
                .setDescription(lang.descripcion2)
                .addField(lang.field1, usuariosAñadir.length == 0 ? lang.nobody : usuariosAñadir.length)
                .addField(lang.field2, pregunta1 ? lang.si : lang.no)
                .addField(lang.field3, nuevoCanal.toString())
                .addField(lang.field4, pregunta3 ? lang.si : lang.no)
                .setColor("RANDOM")
            switch (reason) {
                case 'Finished':
                    await verificar(pregunta1, pregunta2, pregunta3, usuariosAñadir, message)
                    await message.channel.send(embedFinish)
                    break;
                case 'idle':
                    message.channel.send(lang.noTime);
                    break;
                default:
                    if (reason == 'Exited') return message.channel.send(lang.configCompletada);
                    message.channel.send(lang.errorColector + reason).catch(() => {});
                    break;
            }
        } catch (error) {
            message.channel.send(lang.error + error)
            console.log(error)
        } finally {
            noRepetir.delete(message.author.id);
        }
    });

}

export const help = {
    alias: ["inicio"],
    name: "setup",
    onlyDev: false
}