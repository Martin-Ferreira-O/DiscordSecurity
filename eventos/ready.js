export default async(client) => {
    console.log(client.user.tag + " se conecto correctamente en " + client.guilds.cache.size + " servidores");
}