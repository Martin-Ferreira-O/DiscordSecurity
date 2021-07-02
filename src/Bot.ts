import { Client, ClientOptions, Collection } from "discord.js-light";

class Bot {
    client: Client;
    langCache: Collection<string, any>;
    commands: Collection<string, any>;
    events: Collection<string, any>;
    constructor(options: ClientOptions, langCache: Collection<string, any>, commands: Collection<string, any>, events: Collection<string, any>) {
        this.client = new Client(options);
        this.langCache = langCache;
        this.commands = commands;
        this.events = events;
    }
}

export default Bot;