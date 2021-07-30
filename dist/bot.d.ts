import { Client, ClientOptions, Collection } from "discord.js";
import { ILang } from './lib';
declare class Bot {
    readonly client: Client;
    private _langCache;
    private _commands;
    private _events;
    language: ILang;
    constructor(options: ClientOptions, langCache: Collection<string, any>, commands: Collection<string, any>, events: Collection<string, any>);
    get lang(): Collection<string, ILang>;
    set lang(newLang: Collection<string, ILang>);
    set commands(commands: Collection<string, any>);
    get commands(): Collection<string, any>;
    set events(events: Collection<string, any>);
    get events(): Collection<string, any>;
}
export default Bot;
//# sourceMappingURL=bot.d.ts.map