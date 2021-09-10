import { Language } from '../classes/language';

class CommandBase {
	private _name: string;
	private _category: string;
	private _aliases: string[];
	private _cooldown: number;
	private _language;
	/**
	 * The base of the command
	 * @param {String} name Name of the command
	 * @param {String} category Name of the category
	 * @param {String[]} alias Array of alias
	 * @param {Number} cooldown The cooldown of the command
	 */
	constructor(
		name: string,
		category: string,
		alias: string[],
		cooldown: number
	) {
		this._name = name;
		this._category = category;
		this._aliases = alias;
		this._cooldown = cooldown;
		this._language = new Language();
	}
	public get name(): string {
		return this._name;
	}
	public get category(): string {
		return this._category;
	}
	public get aliases(): string[] {
		return this._aliases;
	}
	public get cooldown(): number {
		return this._cooldown;
	}
	/**
	 * Get the bot language and the corresponding command
	 * @param {string} id
	 * @returns The lang of the command
	 */
	public language(id: string) {
		return this._language.lang(id)[this.category][this.name];
	}
}
export { CommandBase };
