// Importing our packages
import { Collection, Intents } from 'discord.js';
import database from "./database/db";
import { config } from 'dotenv';
import { registerCommands, registerEvents, ICommands, IEvents, ILang } from './lib';
import Bot from './bot';

config(); // ENV 

// Constants
const langCache = new Collection<string, ILang>();
const commands = new Collection<string, ICommands>();
const events = new Collection<string, IEvents>();
const bot = new Bot({
    intents: new Intents(32767) // ALL INTENTS
}, langCache, commands, events);

// Loading database, command handling and event handling
(async() => {
    await database(); // Loading database
    await registerCommands(bot, '../commands'); // Command handling
    await registerEvents(bot, '../events'); // Event handling
    await bot.client.login(process.env.TOKEN); // Login the bot
})();
