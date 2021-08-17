export default {
    "events": {
        "message": {
            "prefix": "Hello! My only prefix is `d!`, remember that I can only work with administrator permissions, it is also recommended that I put my role in the largest hierarchy",
            "noExiste": "This command does not exist",
            "error": "Ups apparently there was an error, here's more information",
            "noPerms": "I do not have the permissions to work, you must give me the permission `ADMINISTRATOR`"
        },
        "channelDelete": {
            "reasonBanXtreme": "User deletes channels without being on the whitelist",
            "reasonBan": "User erased more than 3 channels without being on the whitelist",
            "reportChannel1": "The user is banned ",
            "reportChannel2Xtreme": " by deleting 1 channel without being on the whitelist `EXTREM`",
            "reportChannel2": " for erasing more than 3 channels without being on the whitelist",
            "creacionCanal": "A user deleted a channel without being whitelisted, here is the channel :D",
            "protegido": " John tried to erase a protected channel, so it was automatically banned."
        },
        "memberAdd": {
            "reason": "This user is listed as highly malicious.",
            "texto": " was automatically banned by being classified as highly malicious.",
            "error": "%player% was detected as a potentially dangerous user, due to my lack of permissions I could not ban him."
        }
    },
    "commands": {
        "help": {
            "desc": "For detailed information on what the bot does, you can review the [Creator's GitHub](https://github.com/Kapone-dev/DiscordSecurity)",
            "commandInfo": "Here you have information about the %command% command",
            "commandNotFound": "The mentioned command `%command%` is not valid",
            "noArgsDesc": "You can find all my commands in the following format, if you require more information about each command just use d!Help <Command>"
        },
        "invite": {
            "desc": "You can invite the bot [Using this link](https://discordapp.com/oauth2/authorize?client_id=823693385046949929&scope=bot&permissions=8). You can also review your bot's documentation and code [Using this other link](https://github.com/Kapone-dev/DiscordSecurity)",
            "footer": "You need server management permissions to invite me."
        },
        "setup": {
            "footer1": "Write your answer. | If you want to cancel the setting type `exit`",
            "descripcion1": "Mention to users who will be able to use this bot\nWrite their IDs | Write skip if you've already added them or don't want to add anyone",
            "mensajeError": "This user does not exist, try again.",
            "footerError": "If you want to cancel the setting type `exit`",
            "mensajeExtremo": "Do you want to turn on extreme mode?\nOnly the owner and previously added users will be able to delete and create channels. `Yes` | `No`",
            "respuestaSiNo": "This is a yes-and-no answer, try again",
            "canalEnviar": "Which channel should I send the attack logs to?",
            "noServer": "The mentioned channel is not on this server",
            "autoBan": "Do you want every time a malicious user enters to be automatically banned? `Yes` | `No`",
            "title2": "Configuration complete.",
            "descripcion2": "The configuration has been successfully completed.",
            "field1": "Added users",
            "field2": "Extreme mode?",
            "field3": "Channel to send logs",
            "field4": "Ban malicious users?",
            "field5": "Channels protected",
            "noTime": "The time to respond is over.",
            "configCompletada": "Interactive settings off.",
            "errorColector": "The collector stopped because: ",
            "error": "Error, here's more information: ",
            "si": "Yes",
            "no": "No",
            "nobody": "Nobody",
            "noMas3canales": "You can't set more than 3 channels to protect.",
            "noCanal": "You must mention a channel or type 'Skip'",
            "protected": "Do you want to set protected channels?\nAnyone who deletes them will be automatically banned",
            "protectedFooter": "Type 'Ready' to skip this part.",
            "autobanFooter": "Write a yes-or-no answer",
            "footerAttack": "You should mention a valid channel",
            "canalesFooter": "Type 'ready' to finish the setup"
        },
        "deleteUsers": {
            "ingresarId": "Enter the user ID",
            "idValida": "Enter a valid ID.",
            "noUsers": "There is no currently added user.",
            "noEncontrado": "This user is not on the list",
            "sacado": " was taken off the list correctly."
        },
        "addUsers": {
            "noValido": "Enter a valid ID or username",
            "yaEsta": "This user is already on the list",
            "agregado": "Ready, the user was added to the list: "
        },
        "setLang": {
            "noArgs": "You must enter a language between `EN (English)` and `EN (Spanish)`",
            "cambiado": "El lenguaje del bot cambió correctamente", // Acá lo pongo en ingles porque esto solo se activa cuando ya lo cambiaron
            "selected": "This language is already selected"
        },
        "verUsuarios": {
            "noUsuario": "There are no users on my list"
        },
        "forceban": {
            "noUsers": "There are no users on the list of malicious users, maybe it's a bug?",
            "baneado": "Baning users, this can take a few minutes",
            "desc": "Many malicious users were banned, here you can get more information.",
            "ready": "Banned users",
            "errores": "Non-baned users",
            "reason": "Forceban"
        },
        "protected": {
            "establecido": " was established correctly",
            "noPerms": "You need to own the server to run this command",
            "noCanal": "You must set a valid channel.",
            "no3Mas": "You can't add more than 3 channels to the list of protected channels",
            "noFound": "The mentioned channel is not in the list.",
            "noCanales": "There are currently no channels in the list.",
            "removeAdd": "You should mention a 'Remove' - 'Add' option",
            "removeExitoso": "The channel has been successfully deleted",
            "yaEsta": "The mentioned channel is already on this list! You can't add it 2 times"
        },
        "suggest": {
            "description": "The suggestion was sent correctly.",
            "noSuggest": "You did not enter any suggestions!"
        }
    },
    "global": {
        "onlyOwner": "Only the server owner can run this command.",
        "noSearch": "To access this command you must have first used the command `Setup`",
        "noPerms": "You require administrator permission to run this command."
    }
}