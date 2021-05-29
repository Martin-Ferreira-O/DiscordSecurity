import pkg from 'discord.js-light';
const { Client, Collection } = pkg;
import database from "./database/db.js";
import DButtons from 'discord-buttons';
import { registerCommands, registerEvents } from './utils/registry.js';
const client = new Client({
    cacheGuilds: true,
    cacheChannels: true,
    cacheOverwrites: true,
    cacheRoles: true,
    cacheEmojis: false,
    cachePresences: false,
    ws: { intents: 32511 }
});
DButtons(client);
client.idiomasCache = new Map();
import { config } from 'dotenv';
config()
client.comandos = new Collection();
client.events = new Collection();
client.alias = new Collection();
client.cooldowns = new Collection();

(async() => {
    await database();
    await registerCommands(client, '../commands');
    await registerEvents(client, '../events');
    await client.login(process.env.TOKEN);
})();