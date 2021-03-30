import { Client, Collection } from 'discord.js';
const client = new Client({
    messageCacheMaxSize: 5,
    messageCacheLifetime: 30,
    messageSweepInterval: 20,
    ws: { intents: 32511 }
});
import { readdirSync } from 'fs';
import { config } from 'dotenv';
config()
client.comandos = new Collection();
client.alias = new Collection();

// <-- CONTROLADOR DE COMANDOS: -->

for (const file of readdirSync('./comandos/')) {

    if (file.endsWith(".js")) {

        let fileName = file.substring(0, file.length - 3);

        let fileContents = require(`./comandos/${file}`);

        client.comandos.set(fileName, fileContents)

        if (fileContents.help) {
            fileContents.help.alias.forEach(alias => {
                client.alias.set(alias, fileContents);
            });
        }

    }
}

// <-- CONTROLADOR DE EVENTOS: -->

for (const file of readdirSync('./eventos/')) {

    if (file.endsWith(".js")) {

        let fileName = file.substring(0, file.length - 3);

        let fileContents = require(`./eventos/${file}`);

        client.on(fileName, fileContents.bind(null, client));

        delete require.cache[require.resolve(`./eventos/${file}`)];
    }
}


process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});





client.login(process.env.TOKEN);