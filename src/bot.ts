import { Client, ClientOptions, Collection } from "discord.js";
import { ILang, registerCommands, registerEvents} from './lib';
import database from "./database/db";
class Bot {
    readonly client: Client;
    private _lang: Collection<string, ILang>;
    private _commands: Collection<string, any>;
    private _events: Collection<string, any>;
    public language: ILang;
    constructor(options: ClientOptions, langCache: Collection<string, any>, commands: Collection<string, any>, events: Collection<string, any>) {
        this.client = new Client(options);
        this._lang = langCache;
        this._commands = commands;
        this._events = events;
    }
    public get lang() {
        return this._lang;
    }
    public set lang(newLang: Collection<string, ILang>) {
        this._lang = newLang;
    }
    public set commands(commands) {
        this._commands = commands;
    }
    public get commands() {
        return this._commands;
    }

    public set events(events) {
        this._events = events;
    }
    public get events() {
        return this._events;
    }

    async start(): Promise<void> {
        await database(); // Loading database
        await registerCommands(this, '../commands'); // Command handling
        await registerEvents(this, '../events'); // Event handling
        await this.client.login(process.env.TOKEN); // Login the bot
        
        this._lang = new Collection();
        
    }
}

export default Bot;
