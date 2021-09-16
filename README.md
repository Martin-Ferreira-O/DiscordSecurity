# Abandoned project, if you want to build you are free to do it

# DiscordSecurity
## Keep your server completely secure


[Discord Security is a bot to keep your Discord server completely safe
**__Invite here__**](https://discordapp.com/oauth2/authorize?client_id=823693385046949929&scope=bot&permissions=8)
#

## Setting up the bot correctly
For it to work perfectly you must give it the following steps
* Grant you a role with **ADMINISTRATOR**
* Give him the role with the greatest hierarchy (the one above)
* To start the setup you must use the `d!setup` command, this can only be used by the Server Owner.
* You can currently set up to 2 languages (EN - ES) (English - Spanish) with the command `d!set-lang`
* To self-ban malicious and dangerous users (Raiders - Selfbots) you can use the command `d!forceban`
* You can currently find the following commands 
* To set a channel as protected you can use `d!protected-channels`. This will establish a protected channel, in case it is deleted (even if it is a user in WhiteList) it will be banned first and the channel will be recreated. If you are a VIP 3 user the fixed messages will be resubmitn along with the last 100 messages on the channel.

#### What's the whitelist?
> This list will allow users with extreme trust to delete channels on the server, if they are not in this list they will be banned when deleting the channels.
```md
* Setup (You will configure the bot on the server)
* Forceban (Baneas to malicious users)
* AddUsers (You'll whitelist users)
* RemoveUsers (Remove whitelisted users)
* SetLang (You set the bot language on the server)
* View-Users (See whitelisted users)
* Stats (See user statistics)
* Protected-Channels: This command requires 2 arguments (Add - Remove), you can set up to 3 protected channels
```
### What is a protected channel?
__These channels will be channels that the bot will protect without exceptions, if you are whitelisted from the bot and deleting a channel from them will be prohibited. Obviously only the owner will be able to delete these channels without receiving any sanctions.__

#
#### Not yet
<h2> What bring the vips benefits? </h2>
<p>This benefits will be for users who have donated to the bot for maintenance and Hosting.</p>

| Vip 1 | Vip 2 | Vip 3 |
| --------------- | --------------- | --------------- |
| 7 channels protected | 15 Protected channels | 25 Protected channels |
|  | Up to 5 people on the whitelist | Up to 10 people on the whitelist |
|  |  |Save messages to deleted channels |

*To check every VIP you can talk to me in my discord ! Kapone-0001*


#
## Downloading and transpiling the bot
```sh
# Downloading 
git clone https://github.com/Kapone-dev/DiscordSecurity

# Transpiling
cd DiscordSecurity
npm install
npm run build

# Starting the bot
npm run start
```

#
## License

Apache License, Any public bot like this that does not credit the creator will be reported.