import { Client, Collection } from 'discord.js';
import database from "./db.js";
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
await database();
for (const file of readdirSync('./comandos/')) {

    if (file.endsWith(".js")) {

        let fileName = file.substring(0, file.length - 3);

        let fileContents = await
        import (`./comandos/${file}`);

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

        let { default: fileContents } = await
        import (`./eventos/${file}`);
        client.on(fileName, fileContents.bind(null, client));
    }
}
process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});
client.login(process.env.TOKEN);