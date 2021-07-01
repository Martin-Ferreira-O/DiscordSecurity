import pkg from 'discord.js-light';
const { Client, Collection, Intents } = pkg;
import database from "./database/db.js";
import { config } from 'dotenv';
import { registerCommands, registerEvents } from './utils/registry.js';
const client = new Client({
    cacheGuilds: true,
    cacheChannels: true,
    cacheOverwrites: true,
    cacheRoles: true,
    cacheEmojis: false,
    cachePresences: false,
    intents: new Intents(32767)
});
client.idiomasCache = new Map();
config()
client.commands = new Collection();
client.events = new Collection();
client.alias = new Collection();
client.cooldowns = new Collection();

(async() => {
    await database();
    await registerCommands(client, '../comandos');
    await registerEvents(client, '../eventos');
    await client.login(process.env.TOKEN);
})();