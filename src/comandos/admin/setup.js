import pkg from 'discord.js-light';
const { MessageEmbed } = pkg;
const noRepetir = new Set();
import registrador from '../../database/model/registrador.js';
import channelProtected from '../../database/model/channel.js';
import BaseCommand from '../../utils/Structure/Command.js';
export default class SetupCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('setup', 'Admin', ["inicio"], 300)
    }
    async run(client, message, args, idioma) {
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

        let i = 0;
        let usuariosAñadir = []; // Usuarios que se añaden
        let pregunta1; // Modo extremo
        let pregunta2; // Canal a enviar registros
        let pregunta3; // Detectar usuarios maliciosos y banearlos automaticamente
        let pregunta4 = [];
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

                        const usuario = m.mentions.users.first() || await client.users.fetch(m.content).catch(err => {})
                        if (!usuario) return message.channel.send(mensajeDeError)
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
                    await message.channel.send(new MessageEmbed().setFooter(lang.footerAttack).setDescription(lang.canalEnviar).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor("D30089"))
                        // Registros de ataque
                    break;
                case 2:
                    const canal = m.mentions.channels.first() || await client.channels.fetch(m.content).catch(err => {});
                    if (!canal) return message.channel.send(mensajeDeError)
                    if (canal.guild != m.guild) return message.channel.send(new MessageEmbed().setDescription(lang.noServer).setColor("D30089").setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })));
                    pregunta2 = canal.id;
                    i++;
                    await message.channel.send(new MessageEmbed().setFooter(lang.autobanFooter).setDescription(lang.autoBan).setColor("D30089").setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })))
                        // AutoBan
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
                    await message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(lang.protected).setFooter(lang.protectedFooter))
                    break;
                case 4:
                    const canalProtegido = m.mentions.channels.first() || await client.channels.fetch(m.content).catch(err => {});
                    if (!canalProtegido && !['no', 'skip', 'listo', 'ready'].includes(m.content.toLowerCase())) return message.channel.send(mensajeDeError)
                    if (['no', 'skip', 'listo', 'ready'].includes(m.content.toLowerCase())) {
                        i++;
                        collector.stop("Finished");
                        break;
                    } else if (canalProtegido) {
                        if (canalProtegido.guild != m.guild) return message.channel.send(new MessageEmbed().setDescription(lang.noServer).setColor("D30089").setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })));
                        if (pregunta4.length >= 3) {
                            m.react('❌')
                            message.channel.send(new MessageEmbed().setFooter(lang.canalesFooter).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(lang.noMas3canales))
                            return;
                        }
                        if (pregunta4.includes(canalProtegido.id)) return m.react('❌');
                        pregunta4.push(canalProtegido.id);
                        m.react('✅');
                    } else {
                        m.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(lang.noCanal))
                        break;
                    }
            };
        });

        collector.on("end", async(collected, reason) => {
            noRepetir.delete(message.author.id);
            /*
                usuariosAñadir son los usuarios a agregar 
                let pregunta1; = Si es el modo extremo o no.
                let pregunta2 = canal a enviar registros
                let pregunta3 = Banear usuarios maliciosos
                pregunta4 = protected channels
            */
            const nuevoCanal = await client.channels.fetch(pregunta2).catch(err => {});
            let datosPusheados = '';
            if (!pregunta4[0])
                datosPusheados = lang.nobody;
            else {
                for (let i = 0; i < pregunta4.length; i++) {
                    const element = await client.channels.fetch(pregunta4[i]).catch(err => {})
                    datosPusheados += `${element.toString()}\n`;
                }
            }
            switch (reason) {
                case 'Finished':
                    await verificar(pregunta1, pregunta2, pregunta3, usuariosAñadir, message)
                    const embedFinish = new MessageEmbed()
                        .setTitle(lang.title2)
                        .setDescription(lang.descripcion2)
                        .addFields([{
                                name: lang.field1,
                                value: usuariosAñadir.length == 0 ? lang.nobody : usuariosAñadir.length,
                                inline: true
                            },
                            {
                                name: lang.field2,
                                value: pregunta1 ? lang.si : lang.no,
                                inline: true
                            },
                            {
                                name: lang.field3,
                                value: nuevoCanal.toString(),
                                inline: true
                            },
                            {
                                name: lang.field4,
                                value: pregunta3 ? lang.si : lang.no,
                                inline: true
                            },
                            {
                                name: lang.field5,
                                value: datosPusheados,
                                inline: true
                            }
                        ])
                        .setColor("RANDOM");
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
        });
    }
}


async function verificar(pregunta1, pregunta2, pregunta3, usuarios, message, pregunta4 = false) {
    const esquema = new registrador({
        guildId: message.guild.id,
        autoban: pregunta3, // Si los usuarios detectados seran baneados automaticamente
        channel: pregunta2, // Canal a enviar logs
        users: usuarios, // Usuarios permitidos
        extrem: pregunta1 // Si solo el dueño puede borrar canales
    });
    const buscarEsquemas = await registrador.findOne({ guildId: message.guild.id });
    buscarEsquemas ? await registrador.updateOne({ guildId: message.guild.id }, { autoban: pregunta3, channel: pregunta2, users: usuarios, extrem: pregunta1 }) : await esquema.save();
    if (pregunta4) {
        const buscarCanales = await channelProtected.findOne({ guildId: message.guild.id });
        if (!buscarCanales) {
            await channelProtected.create({
                guildId: message.guild.id,
                channel: pregunta4
            });
        } else {
            await buscarCanales.updateOne({ channel: pregunta4 });
        }
    }
}