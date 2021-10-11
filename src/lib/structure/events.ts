import { Language } from '../classes/language';

export class BaseEvent {

	[x: string]: any;
	private _name: string;
	private _language;
	
	constructor(name: string) {
		this._name = name;
		this._language = new Language();
	}

	get name() {
		return this._name;
	}

	/**
	 * Get the bot language and the corresponding command
	 * @param {string} id
	 * @returns The lang of the command
	 */
	language(id: string) {
		return this._language.lang(id).events;
	}
}
