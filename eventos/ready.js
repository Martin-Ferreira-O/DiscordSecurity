export default async(client) => {
    require("../db.js");
    console.log(client.user.tag + " se conecto correctamente en " + client.guilds.cache.size + " servidores");
}