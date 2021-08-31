import {
	Client,
	ClientOptions,
	Collection,
	GuildChannel,
	User,
} from 'discord.js';
import { ICommands, IEvents, ILang, Handler } from './lib';
import { Database } from './database/db';
class Bot {
	readonly client: Client;
	private _lang: Collection<string, ILang>;
	private _commands: Collection<string, any>;
	private _events: Collection<string, any>;

	constructor(
		options: ClientOptions,
		langCache: Collection<string, any>,
		commands: Collection<string, any>,
		events: Collection<string, any>
	) {
		this.client = new Client(options);
		this._lang = langCache;
		this._commands = commands;
		this._events = events;
		this._lang = new Collection();
	}
	public get lang(): Collection<string, ILang> {
		return this._lang;
	}
	public set lang(newLang: Collection<string, ILang>) {
		this._lang = newLang;
	}
	public set commands(commands) {
		this._commands = commands;
	}
	public get commands(): Collection<string, ICommands> {
		return this._commands;
	}
	public set events(events) {
		this._events = events;
	}
	public get events(): Collection<string, IEvents> {
		return this._events;
	}
	/**
	 * Loggin in the database and joining in the bot
	 */
	public async start(): Promise<void> {
		const { register } = new Handler(this);
		const db = new Database(process.env.URLMONGODB);

		db.connect();
		await register('./commands'); // Command handling
		await register('./events'); // Event handling
		await this.client.login(process.env.TOKEN); // Login the bot
	}
	/**
	 * Find a user with a id
	 */
	public async getUser(id: string): Promise<null | User> {
		return (
			this.client.users.cache.get(id) ||
			(await this.client.users.fetch(id).catch(() => null))
		);
	}
	/**
	 * Find a channel with a id
	 */
	public async getChannel(id: string): Promise<null | GuildChannel> {
		return (
			this.client.channels.cache.get(id) ||
			(await this.client.channels.fetch(id).catch(() => null))
		);
	}
}

export default Bot;
