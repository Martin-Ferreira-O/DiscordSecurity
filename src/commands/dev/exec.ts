import util from 'util';
import ch from 'child_process';
import { Message, Util } from 'discord.js';
import { CommandBase } from '../../lib';
import Bot from '../../bot';

const exec = util.promisify(ch.exec);

export default class Exec extends CommandBase {
	constructor() {
		super('exec', 'dev', ['console'], 1);
	}

	async run(bot: Bot, message: Message, args: Array<string>) {
	
		if (!args[0]) return message.channel.send('Debes ingresar algo');

		const e = await exec(args.join(' '));
		const { stdout, stderr } = e;
		
		if (!stdout && !stderr) return message.channel.send('Comando ejecutado pero sin output');
		if (stdout) {
			const text = Util.splitMessage(stdout, {
				maxLength: 1950,
				char: '',
			});
			message.channel.send(text[0]);
		}
		if (stderr) {
			const text = Util.splitMessage(stderr, {
				maxLength: 1950,
				char: '',
			});
			message.channel.send(text[0]);
		}
	}
}
