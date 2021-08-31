import path from 'path';
import fs from 'fs/promises';
import Bot from '../../bot';
import { BaseEvent, CommandBase } from '../structure';
class Handler {
	private _bot: Bot;

	constructor(bot: Bot) {
		this._bot = bot;
	}
	public get bot() {
		return this._bot;
	}
	/**
	 * Register the handler
	 * @param {string} dir Directory to create the handler
	 */
	public async register(dir: string): Promise<void> {
		const filePath = path.join(__dirname, "../../" ,dir);
		const files = await fs.readdir(filePath);
		for (const file of files) {
			const stat = await fs.lstat(path.join(filePath, file));
			if (stat.isDirectory()) this.register(path.join(dir, file));
			if (file.endsWith('.js')) {
				const Base = await import(path.join(filePath, file));
				const base = new Base.default();

				if (base instanceof CommandBase) {
					this.bot.commands.set(base.name, base);
					base.alias.forEach((alias: string) => {
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
