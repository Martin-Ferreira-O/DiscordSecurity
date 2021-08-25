import Bot from '../../bot';
import util from 'util';
import { CommandBase } from '../../lib';
import { Message, MessageEmbed } from 'discord.js';
export default class EvalCommand extends CommandBase {
	constructor() {
		super('eval', 'dev', ['e'], 1);
	}
	async run(bot: Bot, message: Message, args: Array<string>) {
		const tiempo1 = Date.now();
		const edit = new MessageEmbed()
			.setDescription(':stopwatch: Evaluando...')
			.setColor('#7289DA');
		const msg = await message.channel.send({ embeds: [edit] });
		try {
			const code = args.join(' ');
			let evalued = await eval(code);
			const type = typeof evalued || 'Tipo no encontrado.';
			if (typeof evalued !== 'string')
				evalued = util.inspect(evalued, {
					depth: 0,
					maxStringLength: 2000,
				});
			const txt = '' + evalued;
			const embed = new MessageEmbed()
				.addField(':inbox_tray: Entrada', `\`\`\`js\n${code}\n\`\`\``)
				.addField(
					':outbox_tray: Salida',
					`\`${txt.substring(0, 1023)}\``
				)
				.addField(
					':file_folder: Tipo',
					`\`\`\`js\n${type}\n\`\`\``,
					true
				)
				.addField(
					':stopwatch: Tiempo',
					`\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\``,
					true
				)
				.setColor('#7289DA');
			msg.edit({ embeds: [embed] });
		} catch (err) {
			const embed = new MessageEmbed()
				.setAuthor(
					'Error en el eval',
					bot.client.user.displayAvatarURL({ dynamic: true })
				)
				.addField(
					':inbox_tray: Entrada',
					`\`\`\`js\n${args.join(' ')}\n\`\`\``
				)
				.addField(':outbox_tray: Salida', `\`\`\`js\n${err}\n\`\`\``)
				.addField(':file_folder: Tipo', `\`\`\`js\nError\n\`\`\``)
				.setColor('RED');
			msg.edit({ embeds: [embed] });
		}
	}
}
