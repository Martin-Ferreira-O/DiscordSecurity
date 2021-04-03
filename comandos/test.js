export async function run(client, message) {
    client.emit("guildMemberAdd", message.member)
}

export const help = {
    onlyDev: true,
    alias: []
}