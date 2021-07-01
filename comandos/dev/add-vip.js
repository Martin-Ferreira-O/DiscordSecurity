import model from "../../database/model/vips.js";
import moment from 'moment';
import BaseCommand from '../../utils/Structure/Command.js';
export default class AddVip extends BaseCommand {
    constructor() {
        // Name, Category, alias, cooldown
        super('add-vip', 'dev', ['añadir-vip'], 1)
    }
    async run(client, message, args) {
        if (!args[0]) return message.channel.send("Please provide a argument.\nUse: `d!add-vip <Guild> <Licence> <Buyer>`");
        const guild = await client.guilds.fetch(args[0]).catch(err => {})
        if (!guild) return message.channel.send("Guild invalid!");
        const searchGuild = await model.findOne({ guildId: guild.id });
        if (searchGuild) return message.channel.send("This guild has the licence " + searchGuild.licence);
        else {
            const licence = args[1].toLowerCase();
            const buyer = await client.users.fetch(args[2]).catch(err => {})
            if (!buyer) return message.channel.send('Please provide a valid buyer\nUse: `d!add-vip <Guild> <Licence> <Buyer>`')
            if (!['vip1', 'vip2', 'vip3'].includes(licence)) return message.channel.send('Please provide a valid license. `Vip1, vip2, vip`\nUse: `d!add-vip <Guild> <Licence> <Buyer>`');

            let now = new Date()
            const date = new Date(now.setDate(now.getDate() + 30))

            await model.create({
                guildId: guild.id,
                time: date,
                buyer: buyer,
                licence: licence
            });
            message.channel.send('¡The licence has created!. Ends in: ' + moment(date).format('L'));
        }
    }
}