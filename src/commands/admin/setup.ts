const cooldown = new Set(); // This set its a cooldown in the command :D
import { Registrador } from '../../database/';
import { CommandBase } from '../../lib';
import Bot from '../../bot.js';
import { GuildChannel, Message, MessageEmbed, User } from 'discord.js';
export default class SetupCommand extends CommandBase {
	constructor() {

		super('setup', 'admin', ['inicio'], 300);
	}
	async run(bot: Bot, message: Message, args: Array<string>) {
		const lang = this.language(message.guildId);

		if (message.author.id !== message.guild.ownerId)
			return message.channel.send(lang.onlyOwner);
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
					if (
						channel ||
						['no', 'skip', 'listo', 'ready'].includes(msg.content)
					) {
						answers.push(channel.id);
						collector.stop('finish');
					} else {
						message.channel.send({ embeds: [notCorrect] });
						break;
					}
				}
			}
		});

		collector.on('end', async (collected, reason) => {
			cooldown.delete(message.author.id);
			switch (reason) {
				case 'finish': {
					const config = Registrador.findByIdAndUpdate(
						message.guildId,
						{
							users: answers[0] as string[],
							channel: answers[1] as string,
							extrem: answers[2] as boolean,
							autoban: answers[3] as boolean,
							roles: answers[4] as boolean,
						}
					);
					if (!config) {
						new Registrador({
							_id: message.guildId,
							users: answers[0] as string[],
							channel: answers[1] as string,
							extrem: answers[2] as boolean,
							autoban: answers[3] as boolean,
							roles: answers[4] as boolean,
						}).save();
					}
					break;
				}
				case 'idle': {
					message.channel.send(lang.noTime);
					break;
				}
			}
		});
	}
}
