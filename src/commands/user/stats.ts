import moment from 'moment';
import 'moment-duration-format';

import { CommandBase } from '../../lib';
import Bot from '../../bot';
import { Message, MessageEmbed } from 'discord.js';

const memory = (bytes = 0, r = true) => {
	const gigaBytes = bytes / 1024 ** 3;
	const megaBytes = bytes / 1024 ** 2;
	const kiloBytes = bytes / 1024;

	if (gigaBytes > 1) {
		return `${gigaBytes.toFixed(1)} ${r ? 'GB' : ''}`;
	}

	if (megaBytes > 1) {
		return `${megaBytes.toFixed(2)} ${r ? 'MB' : ''}`;
	}

	if (kiloBytes > 1) {
		return `${kiloBytes.toFixed(2)} ${r ? 'KB' : ''}`;
	}

	return `${bytes.toFixed(2)} ${r ? 'B' : ''}`;
}

export default class StatsCommand extends CommandBase {
	constructor() {
		super('stats', 'user', [], 3);
	}

	async run(bot: Bot, message: Message) {

		const mem = process.memoryUsage();
		const memoryU = memory(mem.rss);
		const embedStats = new MessageEmbed()
			.setTitle('***__~~`Stats`~~__***')
			.setColor(0x2f3136)
			.addField(`Bot RAM usage`, memoryU, true)
			.addField(
				'Uptime ',
				`${moment
					.duration(Date.now() - bot.client.readyTimestamp, 'ms')
					.format('d [days], h [hours], m [minutes]')}`,
				true
			)
			.addField('NodeJS version', `${process.version}`, true)
			.addField(
				'Developer',
				`${
					bot.client.users.cache.get('733060948209696819')?.tag ||
					'Kapone#1001'
				}`
			);
		await message.channel.send({ embeds: [embedStats] });
	}
}
