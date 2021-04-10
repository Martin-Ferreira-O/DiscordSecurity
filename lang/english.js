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
            "reportChannel2": " for erasing more than 3 channels without being on the whitelist"
        },
        "memberAdd": {
            "reason": "This user is listed as highly malicious.",
            "texto": " was automatically banned by being classified as highly malicious.",
            "error": " is detected as a malicious user, however I can't ban it"
        }

    },
    "commands": {
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
            "noTime": "The time to respond is over.",
            "configCompletada": "Interactive settings off.",
            "errorColector": "The collector stopped because: ",
            "error": "Error, here's more information: "
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
            "errores": "Non-baned users"
        }
    },
    "global": {
        "onlyOwner": "Only the server owner can run this command.",
        "noSearch": "To access this command you must have first used the command `Setup`",
        "noPerms": "You require administrator permission to run this command."
    }

}