export default async(client) => {
    console.log(client.user.tag + " se conecto correctamente en " + client.guilds.cache.size + " servidores");
    setInterval(() => {
            client.user.setActivity("More " + client.guilds.cache.size + " servers", { type: 'WATCHING' })
        }, 300 * 1000) // 5Minutos
}