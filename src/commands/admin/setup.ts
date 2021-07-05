const noRepetir = new Set();
import {Channel, Registrador} from '../../database/model/index';
import BaseCommand from '../../utils/Structure/command';
import Bot from '../../bot.js';
import { GuildChannel, Message, TextChannel, MessageEmbed } from 'discord.js';
export default class SetupCommand extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('setup', 'Admin', ["inicio"], 300)
    }
    async run(bot: Bot, message: Message, args: Array<string>, idioma) {
        if (message.author.id !== message.guild.ownerID) return message.channel.send(idioma.global.onlyOwner);
        if (noRepetir.has(message.author.id)) return;
        noRepetir.add(message.author.id);
        const lang = idioma.commands.setup;
        const wordsSi = ["si", "yes"];
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
        let pregunta1: boolean; // Modo extremo
        let pregunta2: string; // Canal a enviar registros
        let pregunta3: boolean; // Detectar usuarios maliciosos y banearlos automaticamente
        const pregunta4: Array<string> = [];
        const primerEmbedResponder = new MessageEmbed()
            .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
            .setFooter(lang.footer1)
            .setDescription(lang.descripcion1)
            .setColor('#16E724')
        message.channel.send({embeds: [primerEmbedResponder] });
        const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id, { idle: 120000 });
        const mensajeDeError = new MessageEmbed().setDescription(lang.mensajeError).setFooter(lang.footerError).setColor('#E70916').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
        collector.on("collect", async(m) => {
            if (m.content.toLowerCase() === "exit")
                return collector.stop("Exited");
            switch (i) {
                case 0:
                    if (["listo", "skip", "ready"].includes(m.content.toLowerCase())) {
                        i++
                    } else if (m.content) {

                        const usuario = m.mentions.users.first() || await bot.client.users.fetch(`${BigInt(m.content)}`).catch(err => {})
                        if (!usuario) return message.channel.send({embeds: [mensajeDeError]})
                        if (usuariosAñadir.includes(usuario.id)) return m.react('❌');
                        usuariosAñadir.push(usuario.id)
                        m.react('✅')
                        break;
                    } else {
                        await message.channel.send({embeds: [mensajeDeError]});
                    }
                    const xtremEmbed = new MessageEmbed().setDescription(lang.mensajeExtremo).setFooter(lang.footer1).setColor('#16E724').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }));
                    await message.channel.send({embeds: [xtremEmbed] });
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
                    const attEmbed = new MessageEmbed().setFooter(lang.footerAttack).setDescription(lang.canalEnviar).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor("D30089");
                    await message.channel.send({embeds: [attEmbed] });
                        // Registros de ataque
                    break;
                case 2:
                    const canal = m.mentions.channels.first() || await bot.client.channels.fetch(m.content).catch(err => {});
                    if (!canal) return message.channel.send({embeds: [mensajeDeError] });
                    const noServerEmbed = new MessageEmbed().setDescription(lang.noServer).setColor("D30089").setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }));
                    if (canal.guild != m.guild) return message.channel.send({embeds: [noServerEmbed]});
                    pregunta2 = canal.id;
                    i++;
                    const autoBanEmbed = new MessageEmbed().setFooter(lang.autobanFooter).setDescription(lang.autoBan).setColor("D30089").setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }));
                    await message.channel.send({embeds: [autoBanEmbed] });
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
                        const yesNoEmbed = new MessageEmbed().setDescription(lang.respuestaSiNo).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor("#EE4BB5");
                        return message.channel.send({embeds: [yesNoEmbed]});
                    }
                    const protectedEmbed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(lang.protected).setFooter(lang.protectedFooter);
                    await message.channel.send({embeds: [protectedEmbed]});
                    break;
                case 4:
                    const canalProtegido = m.mentions.channels.first() || await bot.client.channels.fetch(m.content).catch(() => null);
                    if (!canalProtegido && !['no', 'skip', 'listo', 'ready'].includes(m.content.toLowerCase())) return message.channel.send({embeds: [mensajeDeError]})
                    if (['no', 'skip', 'listo', 'ready'].includes(m.content.toLowerCase())) {
                        i++;
                        collector.stop("Finished");
                        break;
                    } else if (canalProtegido) {
                        const noServerEmbed = new MessageEmbed().setDescription(lang.noServer).setColor("D30089").setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }));
                        if (canalProtegido.guild != m.guild) return message.channel.send({embeds: [noServerEmbed]});
                        if (pregunta4.length >= 3) {
                            m.react('❌')
                            const noTresEmbeds = new MessageEmbed().setFooter(lang.canalesFooter).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(lang.noMas3canales);
                            message.channel.send({embeds: [noTresEmbeds]});
                            return;
                        }
                        if (pregunta4.includes(canalProtegido.id)) return m.react('❌');
                        pregunta4.push(canalProtegido.id);
                        m.react('✅');
                    } else {
                        const noChannelEmbed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(lang.noCanal);
                        m.channel.send({embeds: [noChannelEmbed]});
                        break;
                    }
            }
        });

        collector.on("end", async(collected, reason) => {
            noRepetir.delete(message.author.id);
            const nuevoCanal = await bot.client.channels.fetch(pregunta2).catch(() => null) as GuildChannel | TextChannel;
            let datosPusheados = '';
            if (!pregunta4.length)
                datosPusheados = lang.nobody;
            else {
                for (let i = 0; i < pregunta4.length; i++) {
                    const element = await bot.client.channels.fetch(pregunta4[i]).catch(() => null) as GuildChannel | TextChannel;
                    datosPusheados += `${element.toString()}\n`;
                }
            }
            switch (reason) {
                case 'Finished':
                    await verificar(pregunta1, pregunta2, pregunta3, usuariosAñadir, message, pregunta4)
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
                    await message.channel.send({embeds: [embedFinish]})
                    break;
                case 'idle':
                    message.channel.send(lang.noTime);
                    break;
                default:
                    if (reason == 'Exited') return message.channel.send(lang.configCompletada);
                    message.channel.send(lang.errorColector + reason).catch(() => null);
                    break;
            }
        });
    }
}


async function verificar(pregunta1: boolean, pregunta2: string, pregunta3: boolean, usuarios: Array<string>, message: Message, pregunta4: Array<string>) {
    const esquema = new Registrador({
        guildId: message.guild.id,
        autoban: pregunta3, // Si los usuarios detectados seran baneados automaticamente
        channel: pregunta2, // Canal a enviar logs
        users: usuarios, // Usuarios permitidos
        extrem: pregunta1 // Si solo el dueño puede borrar canales
    });
    const buscarEsquemas = await Registrador.findById(message.guild.id);
    buscarEsquemas ? await Registrador.updateOne({ guildId: message.guild.id }, { autoban: pregunta3, channel: pregunta2, users: usuarios, extrem: pregunta1 }) : await esquema.save();
    if (pregunta4.length >= 1) {
        const buscarCanales = await Channel.findById(message.guild.id);
        if (!buscarCanales) {
            await Channel.create({
                guildId: message.guild.id,
                channel: pregunta4
            });
        } else {
            await buscarCanales.updateOne({ channel: pregunta4 });
        }
    }
}