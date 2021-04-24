import model from "../model/vips.js";
export default async(client) => {
    console.log(client.user.tag + " se conecto correctamente en " + client.guilds.cache.size + " servidores");
    client.user.setActivity("Protecting guilds", { type: 'WATCHING' });
    const guilds = await model.find();
    setInterval(() => {
            if (guilds.length >= 1) {
                for (const guild of guilds) {
                    if (guild.time.getTime() >= new Date().getTime()) {
                        await model.findOneAndDelete({ guildId: guild.guildId })
                    }
                }
            }
        }, 3.6e+10) // 10 horas
}