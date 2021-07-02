import path from 'path';
import { promises as fs } from 'fs';
import commons from './commons.js';

const { __dirname } = commons(
    import.meta.url);
async function registerCommands(client, dir = '') {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdir(filePath);
    for (const file of files) {
        const stat = await fs.lstat(path.join(filePath, file));
        if (stat.isDirectory()) registerCommands(client, path.join(dir, file));
        if (file.endsWith('.js')) {
            const Command = await
            import ("file:///" + path.join(__dirname, dir, file));
            const cmd = new Command.default();
            client.commands.set(cmd.name, cmd);
            cmd.alias.forEach((alias: string) => {
                client.commands.set(alias, cmd);
            });
        }
    }
}

async function registerEvents(client, dir = '') {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdir(filePath);
    for (const file of files) {
        const stat = await fs.lstat(path.join(filePath, file));
        if (stat.isDirectory()) registerEvents(client, path.join(dir, file));
        if (file.endsWith('.js')) {
            const eventName = file.substring(0, file.indexOf(".js"));
            const Event = await
            import ("file:///" + path.join(__dirname, dir, file));
            const event = new Event.default();
            client.events.set(event.name, event);
            client.on(eventName, event.run.bind(null, client));
        }
    }
}

export {
    registerCommands,
    registerEvents
}