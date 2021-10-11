import { Message, TextChannel } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import Bot from '../../bot';
import { CommandBase } from '../../lib';

export default class BotSuggestCommand extends CommandBase {
	constructor() {
		super('botsuggest', 'user', ['bot-suggest', 'sugerir'], 15);
	}

	async run(bot: Bot, message: Message, args: Array<string>) {
	
		const lang = this.language(message.guildId);
		const suggest = args.join(' ');
		if (!suggest) return message.channel.send(lang.noSuggest);

		const image: string | null = message.attachments.first()?.url;

		const channel = await bot.getChannel(process.env.SUGERENCIAS);
		if (!channel) return;

		const embed = new MessageEmbed()
			.setAuthor(
				message.member.displayName,
				message.author.avatarURL({ dynamic: true })
			)
			.setDescription(suggest.substring(0, 2047))
			.setColor(0xffa5b5)
			.setFooter(
				message.author.tag,
				message.author.avatarURL({ dynamic: true })
			);

		if (image) embed.setImage(image);
		(channel as TextChannel).send({ embeds: [embed] });
		
		const sended = new MessageEmbed()
			.setAuthor(
				message.member.displayName,
				message.author.avatarURL({ dynamic: true })
			)
			.setDescription(lang.description)
			.setFooter(`0xffa5b5`);
		message.channel.send({ embeds: [sended] });
	}
}
