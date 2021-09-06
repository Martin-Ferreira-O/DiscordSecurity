// Importing our packages
import { Collection } from 'discord.js';
import { config } from 'dotenv';
import { ICommands, IEvents } from './lib';
import Bot from './bot';

config(); // ENV

// Constants
const commands = new Collection<string, ICommands>();
const events = new Collection<string, IEvents>();
const bot = new Bot(
	{
		intents: [
			'GUILDS',
			'GUILD_BANS',
			'GUILD_MEMBERS',
			'GUILD_MESSAGES',
			'GUILD_WEBHOOKS',
		],
	},
	commands,
	events
);

bot.start();
