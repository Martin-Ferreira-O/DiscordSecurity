import { Collection, Intents } from 'discord.js-light';
import database from "./database/db";
import { config } from 'dotenv';
config(); // ENV poins
import { registerCommands, registerEvents } from './utils/registry';
import Bot from './Bot';

const langCache = new Collection<string, any>();
const commands = new Collection<string, any>();
const events = new Collection<string, any>();
const bot = new Bot({
    cacheGuilds: true, // Obligatorio tenerlo, los servidores en cache
    cacheChannels: true, // Los canales en cache
    cacheOverwrites: true, // Los permisos de canales
    cacheRoles: true, // Usaremos los roles para saber que permiso tiene cada usuario
    cacheEmojis: false, // Los emojis no los usaremos
    cachePresences: false, // No requerimos las presencias en nuestro cache
    intents: new Intents(32767) // ALL INTENTS
}, langCache, commands, events);


(async() => {
    await database();
    await registerCommands(bot, '../comandos');
    await registerEvents(bot, '../eventos');
    await bot.client.login(process.env.TOKEN);
})();