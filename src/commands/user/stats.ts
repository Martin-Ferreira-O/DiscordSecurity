import cpuStat from 'cpu-stat';
import moment from 'moment';
import 'moment-duration-format';
import { promisify } from 'util';
const usagePercent = promisify(cpuStat.usagePercent);

import { CommandBase } from '../../lib';
import Bot from '../../bot';
import { Message, MessageEmbed } from 'discord.js';
export default class StatsCommand extends CommandBase {
	constructor() {
		// Name, Category, alias, cooldown
		super('stats', 'user', [], 3);
	}
	async run(bot: Bot, message: Message) {
		const percent = await usagePercent();
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
			.addField('CPU usage', `\`${percent.toFixed(2)}%\``, true)
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

function memory(bytes = 0, r = true) {
	const gigaBytes = bytes / 1024 ** 3;
	if (gigaBytes > 1) {
		return `${gigaBytes.toFixed(1)} ${r ? 'GB' : ''}`;
	}

	const megaBytes = bytes / 1024 ** 2;
	if (megaBytes > 1) {
		return `${megaBytes.toFixed(2)} ${r ? 'MB' : ''}`;
	}

	const kiloBytes = bytes / 1024;
	if (kiloBytes > 1) {
		return `${kiloBytes.toFixed(2)} ${r ? 'KB' : ''}`;
	}

	return `${bytes.toFixed(2)} ${r ? 'B' : ''}`;
}
