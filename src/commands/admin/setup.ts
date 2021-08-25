const cooldown = new Set(); // This set its a cooldown in the command :D
import { Channel, Registrador } from '../../database/';
import { CommandBase } from '../../lib';
import Bot from '../../bot.js';
import {
	GuildChannel,
	Message,
	TextChannel,
	MessageEmbed,
	User,
} from 'discord.js';
export default class SetupCommand extends CommandBase {
	constructor() {
		// Name, Category, alias, cooldown
		super('setup', 'Admin', ['inicio'], 300);
	}
	async run(bot: Bot, message: Message, args: Array<string>) {
		const lang = bot.language.commands.setup;

		if (message.author.id !== message.guild.ownerId)
			return message.channel.send(bot.language.global.onlyOwner);
		if (cooldown.has(message.author.id)) return;
		cooldown.add(message.author.id);

		const asks = [
			lang.descripcion1,
			lang.mensajeExtremo,
			lang.canalEnviar,
			lang.autoBan,
			lang.protected,
		];
		const answers: Array<
			string | boolean | User | GuildChannel | Array<string>
		> = [[]];
		const filter = (m) => m.author.id === message.author.id;
		const collector = message.channel.createMessageCollector({
			filter,
			idle: 60000,
		});
		// Utilities
		const notCorrect = new MessageEmbed()
			.setDescription(lang.mensajeError)
			.setFooter(lang.footerError)
			.setColor('#E70916')
			.setAuthor(
				message.member.displayName,
				message.author.avatarURL({ dynamic: true })
			);
		const ask = new MessageEmbed()
			.setFooter(lang.footer1)
			.setColor('#16E724')
			.setAuthor(
				message.member.displayName,
				message.author.avatarURL({ dynamic: true })
			);
		let counter = 0;

		message.channel.send({ embeds: [ask.setDescription(asks[counter])] });

		collector.on('collect', async (msg) => {
			switch (counter) {
				case 0: {
					const user =
						message.mentions.users.first() ||
						(await bot.getUser(msg.content));
					if (user) {
						(answers[0] as string[]).push(user.id);
					} else if (msg.content == 'skip') {
						counter++;
					} else {
						message.channel.send({ embeds: [notCorrect] });
					}
					message.channel.send({
						embeds: [ask.setDescription(asks[counter])],
					});
					break;
				}
				case 1: {
					if (['yes', 'si'].includes(msg.content.toLowerCase())) {
						answers.push(true);
					} else if (msg.content.toLowerCase() === 'no') {
						answers.push(false);
					} else {
						message.channel.send({ embeds: [notCorrect] });
						break;
					}
					message.channel.send({ embeds: [ask[++counter]] });
					break;
				}
				case 2: {
					const channel =
						message.mentions.channels.first() ||
						(await bot.getChannel(msg.content));
					if (channel) {
						answers.push(channel.id);
						message.channel.send({ embeds: [ask[++counter]] });
						break;
					}
					message.channel.send({ embeds: [notCorrect] });
					break;
				}
				case 3: {
					if (['yes', 'si'].includes(msg.content.toLowerCase())) {
						answers.push(true);
					} else if (msg.content.toLowerCase() === 'no') {
						answers.push(false);
					} else {
						message.channel.send({ embeds: [notCorrect] });
						break;
					}
					message.channel.send({ embeds: [ask[++counter]] });

					break;
				}
				case 4: {
					const channel =
						message.mentions.channels.first() ||
						(await bot.getChannel(msg.content));
					if (channel) {
						answers.push(channel.id);
						message.channel.send({ embeds: [ask[++counter]] });
						break;
					} else if (
						['no', 'skip', 'listo', 'ready'].includes(msg.content)
					) {
						++counter;
						break;
					}
					message.channel.send({ embeds: [notCorrect] });
					break;
				}
			}
		});

		collector.on("end", async (collected, reason) => {
			
		});
/*
		collector.on('end', async (collected, reason) => {
			noRepetir.delete(message.author.id);
			if (reason === 'exit') return;
			const nuevoCanal = (await bot.client.channels
				.fetch(`${BigInt(pregunta2)}`)
				.catch(() => null)) as GuildChannel | TextChannel;
			let datosPusheados = '';
			if (!pregunta4.length) datosPusheados = lang.nobody;
			else {
				for (let i = 0; i < pregunta4.length; i++) {
					const element = (await bot.client.channels
						.fetch(`${BigInt(pregunta4[i])}`)
						.catch(() => null)) as GuildChannel | TextChannel;
					datosPusheados += `${element.toString()}\n`;
				}
			}
			switch (reason) {
				case 'Finished':
					await verificar(
						pregunta1,
						pregunta2,
						pregunta3,
						usuariosAñadir,
						message,
						pregunta4
					);
					const embedFinish = new MessageEmbed()
						.setTitle(lang.title2)
						.setDescription(lang.descripcion2)
						.addFields(
							{
								name: lang.field1,
								value:
									usuariosAñadir.length == 0
										? lang.nobody
										: `${usuariosAñadir.length}`,
								inline: true,
							},
							{
								name: lang.field2,
								value: pregunta1 ? lang.si : lang.no,
								inline: true,
							},
							{
								name: lang.field3,
								value: nuevoCanal.toString(),
								inline: true,
							},
							{
								name: lang.field4,
								value: pregunta3 ? lang.si : lang.no,
								inline: true,
							},
							{
								name: lang.field5,
								value: datosPusheados,
								inline: true,
							}
						)
						.setColor('RANDOM');
					await message.channel.send({ embeds: [embedFinish] });
					break;
				case 'idle':
					message.channel.send(lang.noTime);
					break;
				default:
					if (reason == 'exit')
						message.channel.send(lang.configCompletada);
					else
						message.channel
							.send(lang.errorColector + reason)
							.catch(() => null);
					break;
			}
		});
		*/
	}
}

async function verificar(
	pregunta1: boolean,
	pregunta2: string,
	pregunta3: boolean,
	usuarios: Array<string>,
	message: Message,
	pregunta4: Array<string>
) {
	const esquema = new Registrador({
		guildId: message.guild.id,
		autoban: pregunta3, // Si los usuarios detectados seran baneados automaticamente
		channel: pregunta2, // Canal a enviar logs
		users: usuarios, // Usuarios permitidos
		extrem: pregunta1, // Si solo el dueño puede borrar canales
	});
	const buscarEsquemas = await Registrador.findById(message.guild.id);
	buscarEsquemas
		? await Registrador.findByIdAndUpdate(message.guild.id, {
				autoban: pregunta3,
				channel: pregunta2,
				users: usuarios,
				extrem: pregunta1,
		  })
		: await esquema.save();
	if (pregunta4.length >= 1) {
		const buscarCanales = await Channel.findById(message.guild.id);
		if (!buscarCanales) {
			await Channel.create({
				_id: message.guild.id,
				channel: pregunta4,
			});
		} else {
			await buscarCanales.updateOne({ channel: pregunta4 });
		}
	}
}
