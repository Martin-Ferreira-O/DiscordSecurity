// Importing our packages
import { Collection, Intents } from 'discord.js';
import { config } from 'dotenv';
import { ICommands, IEvents, ILang } from './lib';
import Bot from './bot';

config(); // ENV 

// Constants
const langCache = new Collection<string, ILang>();
const commands = new Collection<string, ICommands>();
const events = new Collection<string, IEvents>();
const bot = new Bot({
    intents: new Intents(32767) // ALL INTENTS
}, langCache, commands, events);


bot.start();