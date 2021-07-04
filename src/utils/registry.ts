import path from 'path';
import { promises as fs } from 'fs';
import Bot from '../Bot';


async function registerCommands(bot: Bot, dir = '') {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdir(filePath);
    for (const file of files) {
        const stat = await fs.lstat(path.join(filePath, file));
        if (stat.isDirectory()) registerCommands(bot, path.join(dir, file));
        if (file.endsWith('.ts')) {
            const Command = await import (path.join(__dirname, dir, file));
            const cmd = new Command.default();
            bot.commands.set(cmd.name, cmd);
            cmd.alias.forEach((alias: string) => {
                bot.commands.set(alias, cmd);
            });
        }
    }
}

async function registerEvents(bot: Bot, dir = '') {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdir(filePath);
    for (const file of files) {
        const stat = await fs.lstat(path.join(filePath, file));
        if (stat.isDirectory()) registerEvents(bot, path.join(dir, file));
        if (file.endsWith('.ts')) {
            const eventName = file.substring(0, file.indexOf(".ts"));
            const Event = await
            import (path.join(__dirname, dir, file));
            const event = new Event.default();
            bot.events.set(event.name, event);
            bot.client.on(eventName, event.run.bind(null, bot));
        }
    }
}

export {
    registerCommands,
    registerEvents
}