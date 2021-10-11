import { Maliciuos } from '../../database/';
import { CommandBase } from '../../lib';
import Bot from '../../bot';
import { Message, Util, MessageEmbed } from 'discord.js';

export default class ForceBanCommand extends CommandBase {
	constructor() {
		super('force-ban', 'admin', ['forceban'], 1500);
	}
	async run(bot: Bot, message: Message): Promise<void | Message> {

		const lang = this.language(message.guildId);
		if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(lang.noPerms);
		
		const users = await Maliciuos.findOne();
		if (!users) return message.channel.send(lang.noUsers);
		
		const msg = await message.channel.send(lang.baneado);
		
		let noBannneds = 0;
		let banneds = 0;
		
		for (const usersId of users.users) {
			await Util.delayFor(5000);

			const user = await bot.getUser(usersId);
			if (user) {
				await message.guild.members
					.ban(user, { days: 7, reason: lang.reason })
					.catch(() => noBannneds++ );
			}
			banneds++;
		}
		
		const embed = new MessageEmbed()
			.setAuthor(
				message.member.displayName,
				message.author.avatarURL({ dynamic: true })
			)
			.setDescription(lang.desc)
			.addFields(
				{
					name: lang.ready,
					value: `${banneds - noBannneds}`,
					inline: true,
				},
				{
					name: lang.errores,
					value: `${noBannneds}`,
					inline: true,
				}
			);
		await msg.edit({ embeds: [embed] });
	}
}
