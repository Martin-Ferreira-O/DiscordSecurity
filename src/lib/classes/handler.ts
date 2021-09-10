import path from 'path';
import fs from 'fs/promises';
import Bot from '../../bot';
import { BaseEvent, CommandBase } from '../structure';
class Handler {
	
	private _bot: Bot;

	constructor(bot: Bot) {
		this._bot = bot;
	}

	public get bot(): Bot {
		return this._bot;
	}
	
	private isFile(file: string): boolean {
		return file.endsWith('.js');
	}

	private async files(folder: string): Promise<string[]> {
		const dirPath = path.join(__dirname, '../../', folder);
		const files = await fs.readdir(dirPath);
		return files;
	}

	/**
	 * Register the handler
	 * @param {string} dir Directory to create the handler
	 * @returns {void}
	 */
	async register(dir: string): Promise<void> {
		const files = await this.files(dir);

		for (const file of files) {
			const stat = await fs.lstat(file);
			if (stat.isDirectory()) this.register(path.join(dir, file));
			if (this.isFile(file)) {
				const Base = await import(file);
				const base = new Base.default();

				if (base instanceof CommandBase) {
					this.bot.commands.set(base.name, base);
					base.aliases.forEach((alias: string) => {
						this.bot.commands.set(alias, base);
					});
				} else if (base instanceof BaseEvent) {
					this.bot.events.set(base.name, base);
					this.bot.client.on(
						base.name,
						base.run.bind(null, this.bot)
					);
				}
			}
		}
	}
}
export { Handler };
