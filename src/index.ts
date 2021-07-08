import { Collection, Intents } from 'discord.js';
import database from "./database/db";
import { config } from 'dotenv';
config(); // ENV 
import { registerCommands, registerEvents } from './utils/registry';
import Bot from './bot';

const langCache = new Collection<string, any>();
const commands = new Collection<string, any>();
const events = new Collection<string, any>();
const bot = new Bot({
    intents: new Intents(32767) // ALL INTENTS
}, langCache, commands, events);


(async() => {
    await database();
    await registerCommands(bot, '../commands');
    await registerEvents(bot, '../events');
    await bot.client.login(process.env.TOKEN);
})();