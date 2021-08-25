class CommandBase {
	private _name: string;
	private _category: string;
	private _alias: string[];
	private _cooldown: number;
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
		this._alias = alias;
		this._cooldown = cooldown;
	}
	public get name(): string {
		return this._name;
	}
	public get category(): string {
		return this._category;
	}
	public get alias(): string[] {
		return this._alias;
	}
	public get cooldown(): number {
		return this._cooldown;
	}
}
export { CommandBase };
