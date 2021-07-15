import { Client, ClientOptions, Collection } from "discord.js";
import {ILang} from './utils/interfaces/index';
class Bot {
    readonly client: Client;
    private _langCache: Collection<string, ILang>;
    private _commands: Collection<string, any>;
    private _events: Collection<string, any>;
    public language: ILang;
    constructor(options: ClientOptions, langCache: Collection<string, any>, commands: Collection<string, any>, events: Collection<string, any>) {
        this.client = new Client(options);
        this._langCache = langCache;
        this._commands = commands;
        this._events = events;
    }
    public get lang() {
        return this._langCache;
    }
    public set lang(newLang: Collection<string, ILang>) {
        this._langCache = newLang;
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
}

export default Bot;