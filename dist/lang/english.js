"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
            "cambiado": "El lenguaje del bot cambió correctamente",
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nbGlzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYW5nL2VuZ2xpc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBZTtJQUNYLFFBQVEsRUFBRTtRQUNOLFNBQVMsRUFBRTtZQUNQLFFBQVEsRUFBRSxpS0FBaUs7WUFDM0ssVUFBVSxFQUFFLDZCQUE2QjtZQUN6QyxPQUFPLEVBQUUsNERBQTREO1lBQ3JFLFNBQVMsRUFBRSx3RkFBd0Y7U0FDdEc7UUFDRCxlQUFlLEVBQUU7WUFDYixpQkFBaUIsRUFBRSxzREFBc0Q7WUFDekUsV0FBVyxFQUFFLGlFQUFpRTtZQUM5RSxnQkFBZ0IsRUFBRSxxQkFBcUI7WUFDdkMsc0JBQXNCLEVBQUUsZ0VBQWdFO1lBQ3hGLGdCQUFnQixFQUFFLGtFQUFrRTtZQUNwRixlQUFlLEVBQUUsNEVBQTRFO1lBQzdGLFdBQVcsRUFBRSwyRUFBMkU7U0FDM0Y7UUFDRCxXQUFXLEVBQUU7WUFDVCxRQUFRLEVBQUUsMENBQTBDO1lBQ3BELE9BQU8sRUFBRSxvRUFBb0U7WUFDN0UsT0FBTyxFQUFFLDJHQUEyRztTQUN2SDtLQUNKO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osTUFBTSxFQUFFLHFJQUFxSTtZQUM3SSxhQUFhLEVBQUUsdURBQXVEO1lBQ3RFLGlCQUFpQixFQUFFLGdEQUFnRDtZQUNuRSxZQUFZLEVBQUUsb0lBQW9JO1NBQ3JKO1FBQ0QsUUFBUSxFQUFFO1lBQ04sTUFBTSxFQUFFLHNRQUFzUTtZQUM5USxRQUFRLEVBQUUsc0RBQXNEO1NBQ25FO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsU0FBUyxFQUFFLG9FQUFvRTtZQUMvRSxjQUFjLEVBQUUsMElBQTBJO1lBQzFKLGNBQWMsRUFBRSxzQ0FBc0M7WUFDdEQsYUFBYSxFQUFFLCtDQUErQztZQUM5RCxnQkFBZ0IsRUFBRSwwSUFBMEk7WUFDNUosZUFBZSxFQUFFLHdDQUF3QztZQUN6RCxhQUFhLEVBQUUsaURBQWlEO1lBQ2hFLFVBQVUsRUFBRSw2Q0FBNkM7WUFDekQsU0FBUyxFQUFFLHlGQUF5RjtZQUNwRyxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLGNBQWMsRUFBRSxvREFBb0Q7WUFDcEUsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLDhCQUE4QjtZQUN4QyxrQkFBa0IsRUFBRSwyQkFBMkI7WUFDL0MsZUFBZSxFQUFFLGlDQUFpQztZQUNsRCxPQUFPLEVBQUUsa0NBQWtDO1lBQzNDLElBQUksRUFBRSxLQUFLO1lBQ1gsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixlQUFlLEVBQUUsZ0RBQWdEO1lBQ2pFLFNBQVMsRUFBRSwyQ0FBMkM7WUFDdEQsV0FBVyxFQUFFLDhGQUE4RjtZQUMzRyxpQkFBaUIsRUFBRSxpQ0FBaUM7WUFDcEQsZUFBZSxFQUFFLDBCQUEwQjtZQUMzQyxjQUFjLEVBQUUsb0NBQW9DO1lBQ3BELGVBQWUsRUFBRSxrQ0FBa0M7U0FDdEQ7UUFDRCxhQUFhLEVBQUU7WUFDWCxZQUFZLEVBQUUsbUJBQW1CO1lBQ2pDLFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsU0FBUyxFQUFFLG1DQUFtQztZQUM5QyxjQUFjLEVBQUUsOEJBQThCO1lBQzlDLFFBQVEsRUFBRSxvQ0FBb0M7U0FDakQ7UUFDRCxVQUFVLEVBQUU7WUFDUixVQUFVLEVBQUUsOEJBQThCO1lBQzFDLFFBQVEsRUFBRSxrQ0FBa0M7WUFDNUMsVUFBVSxFQUFFLHlDQUF5QztTQUN4RDtRQUNELFNBQVMsRUFBRTtZQUNQLFFBQVEsRUFBRSxxRUFBcUU7WUFDL0UsVUFBVSxFQUFFLDBDQUEwQztZQUN0RCxVQUFVLEVBQUUsbUNBQW1DO1NBQ2xEO1FBQ0QsYUFBYSxFQUFFO1lBQ1gsV0FBVyxFQUFFLCtCQUErQjtTQUMvQztRQUNELFVBQVUsRUFBRTtZQUNSLFNBQVMsRUFBRSxzRUFBc0U7WUFDakYsU0FBUyxFQUFFLDJDQUEyQztZQUN0RCxNQUFNLEVBQUUsc0VBQXNFO1lBQzlFLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFNBQVMsRUFBRSxpQkFBaUI7WUFDNUIsUUFBUSxFQUFFLFVBQVU7U0FDdkI7UUFDRCxXQUFXLEVBQUU7WUFDVCxhQUFhLEVBQUUsNEJBQTRCO1lBQzNDLFNBQVMsRUFBRSxnREFBZ0Q7WUFDM0QsU0FBUyxFQUFFLCtCQUErQjtZQUMxQyxRQUFRLEVBQUUsc0VBQXNFO1lBQ2hGLFNBQVMsRUFBRSwyQ0FBMkM7WUFDdEQsV0FBVyxFQUFFLDhDQUE4QztZQUMzRCxXQUFXLEVBQUUsOENBQThDO1lBQzNELGVBQWUsRUFBRSwyQ0FBMkM7WUFDNUQsUUFBUSxFQUFFLHlFQUF5RTtTQUN0RjtRQUNELFNBQVMsRUFBRTtZQUNQLGFBQWEsRUFBRSxvQ0FBb0M7WUFDbkQsV0FBVyxFQUFFLG9DQUFvQztTQUNwRDtLQUNKO0lBQ0QsUUFBUSxFQUFFO1FBQ04sV0FBVyxFQUFFLDZDQUE2QztRQUMxRCxVQUFVLEVBQUUscUVBQXFFO1FBQ2pGLFNBQVMsRUFBRSwyREFBMkQ7S0FDekU7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJldmVudHNcIjoge1xyXG4gICAgICAgIFwibWVzc2FnZVwiOiB7XHJcbiAgICAgICAgICAgIFwicHJlZml4XCI6IFwiSGVsbG8hIE15IG9ubHkgcHJlZml4IGlzIGBkIWAsIHJlbWVtYmVyIHRoYXQgSSBjYW4gb25seSB3b3JrIHdpdGggYWRtaW5pc3RyYXRvciBwZXJtaXNzaW9ucywgaXQgaXMgYWxzbyByZWNvbW1lbmRlZCB0aGF0IEkgcHV0IG15IHJvbGUgaW4gdGhlIGxhcmdlc3QgaGllcmFyY2h5XCIsXHJcbiAgICAgICAgICAgIFwibm9FeGlzdGVcIjogXCJUaGlzIGNvbW1hbmQgZG9lcyBub3QgZXhpc3RcIixcclxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlVwcyBhcHBhcmVudGx5IHRoZXJlIHdhcyBhbiBlcnJvciwgaGVyZSdzIG1vcmUgaW5mb3JtYXRpb25cIixcclxuICAgICAgICAgICAgXCJub1Blcm1zXCI6IFwiSSBkbyBub3QgaGF2ZSB0aGUgcGVybWlzc2lvbnMgdG8gd29yaywgeW91IG11c3QgZ2l2ZSBtZSB0aGUgcGVybWlzc2lvbiBgQURNSU5JU1RSQVRPUmBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjaGFubmVsRGVsZXRlXCI6IHtcclxuICAgICAgICAgICAgXCJyZWFzb25CYW5YdHJlbWVcIjogXCJVc2VyIGRlbGV0ZXMgY2hhbm5lbHMgd2l0aG91dCBiZWluZyBvbiB0aGUgd2hpdGVsaXN0XCIsXHJcbiAgICAgICAgICAgIFwicmVhc29uQmFuXCI6IFwiVXNlciBlcmFzZWQgbW9yZSB0aGFuIDMgY2hhbm5lbHMgd2l0aG91dCBiZWluZyBvbiB0aGUgd2hpdGVsaXN0XCIsXHJcbiAgICAgICAgICAgIFwicmVwb3J0Q2hhbm5lbDFcIjogXCJUaGUgdXNlciBpcyBiYW5uZWQgXCIsXHJcbiAgICAgICAgICAgIFwicmVwb3J0Q2hhbm5lbDJYdHJlbWVcIjogXCIgYnkgZGVsZXRpbmcgMSBjaGFubmVsIHdpdGhvdXQgYmVpbmcgb24gdGhlIHdoaXRlbGlzdCBgRVhUUkVNYFwiLFxyXG4gICAgICAgICAgICBcInJlcG9ydENoYW5uZWwyXCI6IFwiIGZvciBlcmFzaW5nIG1vcmUgdGhhbiAzIGNoYW5uZWxzIHdpdGhvdXQgYmVpbmcgb24gdGhlIHdoaXRlbGlzdFwiLFxyXG4gICAgICAgICAgICBcImNyZWFjaW9uQ2FuYWxcIjogXCJBIHVzZXIgZGVsZXRlZCBhIGNoYW5uZWwgd2l0aG91dCBiZWluZyB3aGl0ZWxpc3RlZCwgaGVyZSBpcyB0aGUgY2hhbm5lbCA6RFwiLFxyXG4gICAgICAgICAgICBcInByb3RlZ2lkb1wiOiBcIiBKb2huIHRyaWVkIHRvIGVyYXNlIGEgcHJvdGVjdGVkIGNoYW5uZWwsIHNvIGl0IHdhcyBhdXRvbWF0aWNhbGx5IGJhbm5lZC5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtZW1iZXJBZGRcIjoge1xyXG4gICAgICAgICAgICBcInJlYXNvblwiOiBcIlRoaXMgdXNlciBpcyBsaXN0ZWQgYXMgaGlnaGx5IG1hbGljaW91cy5cIixcclxuICAgICAgICAgICAgXCJ0ZXh0b1wiOiBcIiB3YXMgYXV0b21hdGljYWxseSBiYW5uZWQgYnkgYmVpbmcgY2xhc3NpZmllZCBhcyBoaWdobHkgbWFsaWNpb3VzLlwiLFxyXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiJXBsYXllciUgd2FzIGRldGVjdGVkIGFzIGEgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIHVzZXIsIGR1ZSB0byBteSBsYWNrIG9mIHBlcm1pc3Npb25zIEkgY291bGQgbm90IGJhbiBoaW0uXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJjb21tYW5kc1wiOiB7XHJcbiAgICAgICAgXCJoZWxwXCI6IHtcclxuICAgICAgICAgICAgXCJkZXNjXCI6IFwiRm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgdGhlIGJvdCBkb2VzLCB5b3UgY2FuIHJldmlldyB0aGUgW0NyZWF0b3IncyBHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9LYXBvbmUtZGV2L0Rpc2NvcmRTZWN1cml0eSlcIixcclxuICAgICAgICAgICAgXCJjb21tYW5kSW5mb1wiOiBcIkhlcmUgeW91IGhhdmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlICVjb21tYW5kJSBjb21tYW5kXCIsXHJcbiAgICAgICAgICAgIFwiY29tbWFuZE5vdEZvdW5kXCI6IFwiVGhlIG1lbnRpb25lZCBjb21tYW5kIGAlY29tbWFuZCVgIGlzIG5vdCB2YWxpZFwiLFxyXG4gICAgICAgICAgICBcIm5vQXJnc0Rlc2NcIjogXCJZb3UgY2FuIGZpbmQgYWxsIG15IGNvbW1hbmRzIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0LCBpZiB5b3UgcmVxdWlyZSBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGVhY2ggY29tbWFuZCBqdXN0IHVzZSBkIUhlbHAgPENvbW1hbmQ+XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaW52aXRlXCI6IHtcclxuICAgICAgICAgICAgXCJkZXNjXCI6IFwiWW91IGNhbiBpbnZpdGUgdGhlIGJvdCBbVXNpbmcgdGhpcyBsaW5rXShodHRwczovL2Rpc2NvcmRhcHAuY29tL29hdXRoMi9hdXRob3JpemU/Y2xpZW50X2lkPTgyMzY5MzM4NTA0Njk0OTkyOSZzY29wZT1ib3QmcGVybWlzc2lvbnM9OCkuIFlvdSBjYW4gYWxzbyByZXZpZXcgeW91ciBib3QncyBkb2N1bWVudGF0aW9uIGFuZCBjb2RlIFtVc2luZyB0aGlzIG90aGVyIGxpbmtdKGh0dHBzOi8vZ2l0aHViLmNvbS9LYXBvbmUtZGV2L0Rpc2NvcmRTZWN1cml0eSlcIixcclxuICAgICAgICAgICAgXCJmb290ZXJcIjogXCJZb3UgbmVlZCBzZXJ2ZXIgbWFuYWdlbWVudCBwZXJtaXNzaW9ucyB0byBpbnZpdGUgbWUuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2V0dXBcIjoge1xyXG4gICAgICAgICAgICBcImZvb3RlcjFcIjogXCJXcml0ZSB5b3VyIGFuc3dlci4gfCBJZiB5b3Ugd2FudCB0byBjYW5jZWwgdGhlIHNldHRpbmcgdHlwZSBgZXhpdGBcIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwY2lvbjFcIjogXCJNZW50aW9uIHRvIHVzZXJzIHdobyB3aWxsIGJlIGFibGUgdG8gdXNlIHRoaXMgYm90XFxuV3JpdGUgdGhlaXIgSURzIHwgV3JpdGUgc2tpcCBpZiB5b3UndmUgYWxyZWFkeSBhZGRlZCB0aGVtIG9yIGRvbid0IHdhbnQgdG8gYWRkIGFueW9uZVwiLFxyXG4gICAgICAgICAgICBcIm1lbnNhamVFcnJvclwiOiBcIlRoaXMgdXNlciBkb2VzIG5vdCBleGlzdCwgdHJ5IGFnYWluLlwiLFxyXG4gICAgICAgICAgICBcImZvb3RlckVycm9yXCI6IFwiSWYgeW91IHdhbnQgdG8gY2FuY2VsIHRoZSBzZXR0aW5nIHR5cGUgYGV4aXRgXCIsXHJcbiAgICAgICAgICAgIFwibWVuc2FqZUV4dHJlbW9cIjogXCJEbyB5b3Ugd2FudCB0byB0dXJuIG9uIGV4dHJlbWUgbW9kZT9cXG5Pbmx5IHRoZSBvd25lciBhbmQgcHJldmlvdXNseSBhZGRlZCB1c2VycyB3aWxsIGJlIGFibGUgdG8gZGVsZXRlIGFuZCBjcmVhdGUgY2hhbm5lbHMuIGBZZXNgIHwgYE5vYFwiLFxyXG4gICAgICAgICAgICBcInJlc3B1ZXN0YVNpTm9cIjogXCJUaGlzIGlzIGEgeWVzLWFuZC1ubyBhbnN3ZXIsIHRyeSBhZ2FpblwiLFxyXG4gICAgICAgICAgICBcImNhbmFsRW52aWFyXCI6IFwiV2hpY2ggY2hhbm5lbCBzaG91bGQgSSBzZW5kIHRoZSBhdHRhY2sgbG9ncyB0bz9cIixcclxuICAgICAgICAgICAgXCJub1NlcnZlclwiOiBcIlRoZSBtZW50aW9uZWQgY2hhbm5lbCBpcyBub3Qgb24gdGhpcyBzZXJ2ZXJcIixcclxuICAgICAgICAgICAgXCJhdXRvQmFuXCI6IFwiRG8geW91IHdhbnQgZXZlcnkgdGltZSBhIG1hbGljaW91cyB1c2VyIGVudGVycyB0byBiZSBhdXRvbWF0aWNhbGx5IGJhbm5lZD8gYFllc2AgfCBgTm9gXCIsXHJcbiAgICAgICAgICAgIFwidGl0bGUyXCI6IFwiQ29uZmlndXJhdGlvbiBjb21wbGV0ZS5cIixcclxuICAgICAgICAgICAgXCJkZXNjcmlwY2lvbjJcIjogXCJUaGUgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgY29tcGxldGVkLlwiLFxyXG4gICAgICAgICAgICBcImZpZWxkMVwiOiBcIkFkZGVkIHVzZXJzXCIsXHJcbiAgICAgICAgICAgIFwiZmllbGQyXCI6IFwiRXh0cmVtZSBtb2RlP1wiLFxyXG4gICAgICAgICAgICBcImZpZWxkM1wiOiBcIkNoYW5uZWwgdG8gc2VuZCBsb2dzXCIsXHJcbiAgICAgICAgICAgIFwiZmllbGQ0XCI6IFwiQmFuIG1hbGljaW91cyB1c2Vycz9cIixcclxuICAgICAgICAgICAgXCJmaWVsZDVcIjogXCJDaGFubmVscyBwcm90ZWN0ZWRcIixcclxuICAgICAgICAgICAgXCJub1RpbWVcIjogXCJUaGUgdGltZSB0byByZXNwb25kIGlzIG92ZXIuXCIsXHJcbiAgICAgICAgICAgIFwiY29uZmlnQ29tcGxldGFkYVwiOiBcIkludGVyYWN0aXZlIHNldHRpbmdzIG9mZi5cIixcclxuICAgICAgICAgICAgXCJlcnJvckNvbGVjdG9yXCI6IFwiVGhlIGNvbGxlY3RvciBzdG9wcGVkIGJlY2F1c2U6IFwiLFxyXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiRXJyb3IsIGhlcmUncyBtb3JlIGluZm9ybWF0aW9uOiBcIixcclxuICAgICAgICAgICAgXCJzaVwiOiBcIlllc1wiLFxyXG4gICAgICAgICAgICBcIm5vXCI6IFwiTm9cIixcclxuICAgICAgICAgICAgXCJub2JvZHlcIjogXCJOb2JvZHlcIixcclxuICAgICAgICAgICAgXCJub01hczNjYW5hbGVzXCI6IFwiWW91IGNhbid0IHNldCBtb3JlIHRoYW4gMyBjaGFubmVscyB0byBwcm90ZWN0LlwiLFxyXG4gICAgICAgICAgICBcIm5vQ2FuYWxcIjogXCJZb3UgbXVzdCBtZW50aW9uIGEgY2hhbm5lbCBvciB0eXBlICdTa2lwJ1wiLFxyXG4gICAgICAgICAgICBcInByb3RlY3RlZFwiOiBcIkRvIHlvdSB3YW50IHRvIHNldCBwcm90ZWN0ZWQgY2hhbm5lbHM/XFxuQW55b25lIHdobyBkZWxldGVzIHRoZW0gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGJhbm5lZFwiLFxyXG4gICAgICAgICAgICBcInByb3RlY3RlZEZvb3RlclwiOiBcIlR5cGUgJ1JlYWR5JyB0byBza2lwIHRoaXMgcGFydC5cIixcclxuICAgICAgICAgICAgXCJhdXRvYmFuRm9vdGVyXCI6IFwiV3JpdGUgYSB5ZXMtb3Itbm8gYW5zd2VyXCIsXHJcbiAgICAgICAgICAgIFwiZm9vdGVyQXR0YWNrXCI6IFwiWW91IHNob3VsZCBtZW50aW9uIGEgdmFsaWQgY2hhbm5lbFwiLFxyXG4gICAgICAgICAgICBcImNhbmFsZXNGb290ZXJcIjogXCJUeXBlICdyZWFkeScgdG8gZmluaXNoIHRoZSBzZXR1cFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlbGV0ZVVzZXJzXCI6IHtcclxuICAgICAgICAgICAgXCJpbmdyZXNhcklkXCI6IFwiRW50ZXIgdGhlIHVzZXIgSURcIixcclxuICAgICAgICAgICAgXCJpZFZhbGlkYVwiOiBcIkVudGVyIGEgdmFsaWQgSUQuXCIsXHJcbiAgICAgICAgICAgIFwibm9Vc2Vyc1wiOiBcIlRoZXJlIGlzIG5vIGN1cnJlbnRseSBhZGRlZCB1c2VyLlwiLFxyXG4gICAgICAgICAgICBcIm5vRW5jb250cmFkb1wiOiBcIlRoaXMgdXNlciBpcyBub3Qgb24gdGhlIGxpc3RcIixcclxuICAgICAgICAgICAgXCJzYWNhZG9cIjogXCIgd2FzIHRha2VuIG9mZiB0aGUgbGlzdCBjb3JyZWN0bHkuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYWRkVXNlcnNcIjoge1xyXG4gICAgICAgICAgICBcIm5vVmFsaWRvXCI6IFwiRW50ZXIgYSB2YWxpZCBJRCBvciB1c2VybmFtZVwiLFxyXG4gICAgICAgICAgICBcInlhRXN0YVwiOiBcIlRoaXMgdXNlciBpcyBhbHJlYWR5IG9uIHRoZSBsaXN0XCIsXHJcbiAgICAgICAgICAgIFwiYWdyZWdhZG9cIjogXCJSZWFkeSwgdGhlIHVzZXIgd2FzIGFkZGVkIHRvIHRoZSBsaXN0OiBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzZXRMYW5nXCI6IHtcclxuICAgICAgICAgICAgXCJub0FyZ3NcIjogXCJZb3UgbXVzdCBlbnRlciBhIGxhbmd1YWdlIGJldHdlZW4gYEVOIChFbmdsaXNoKWAgYW5kIGBFTiAoU3BhbmlzaClgXCIsXHJcbiAgICAgICAgICAgIFwiY2FtYmlhZG9cIjogXCJFbCBsZW5ndWFqZSBkZWwgYm90IGNhbWJpw7MgY29ycmVjdGFtZW50ZVwiLCAvLyBBY8OhIGxvIHBvbmdvIGVuIGluZ2xlcyBwb3JxdWUgZXN0byBzb2xvIHNlIGFjdGl2YSBjdWFuZG8geWEgbG8gY2FtYmlhcm9uXHJcbiAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogXCJUaGlzIGxhbmd1YWdlIGlzIGFscmVhZHkgc2VsZWN0ZWRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2ZXJVc3Vhcmlvc1wiOiB7XHJcbiAgICAgICAgICAgIFwibm9Vc3VhcmlvXCI6IFwiVGhlcmUgYXJlIG5vIHVzZXJzIG9uIG15IGxpc3RcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJmb3JjZWJhblwiOiB7XHJcbiAgICAgICAgICAgIFwibm9Vc2Vyc1wiOiBcIlRoZXJlIGFyZSBubyB1c2VycyBvbiB0aGUgbGlzdCBvZiBtYWxpY2lvdXMgdXNlcnMsIG1heWJlIGl0J3MgYSBidWc/XCIsXHJcbiAgICAgICAgICAgIFwiYmFuZWFkb1wiOiBcIkJhbmluZyB1c2VycywgdGhpcyBjYW4gdGFrZSBhIGZldyBtaW51dGVzXCIsXHJcbiAgICAgICAgICAgIFwiZGVzY1wiOiBcIk1hbnkgbWFsaWNpb3VzIHVzZXJzIHdlcmUgYmFubmVkLCBoZXJlIHlvdSBjYW4gZ2V0IG1vcmUgaW5mb3JtYXRpb24uXCIsXHJcbiAgICAgICAgICAgIFwicmVhZHlcIjogXCJCYW5uZWQgdXNlcnNcIixcclxuICAgICAgICAgICAgXCJlcnJvcmVzXCI6IFwiTm9uLWJhbmVkIHVzZXJzXCIsXHJcbiAgICAgICAgICAgIFwicmVhc29uXCI6IFwiRm9yY2ViYW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwcm90ZWN0ZWRcIjoge1xyXG4gICAgICAgICAgICBcImVzdGFibGVjaWRvXCI6IFwiIHdhcyBlc3RhYmxpc2hlZCBjb3JyZWN0bHlcIixcclxuICAgICAgICAgICAgXCJub1Blcm1zXCI6IFwiWW91IG5lZWQgdG8gb3duIHRoZSBzZXJ2ZXIgdG8gcnVuIHRoaXMgY29tbWFuZFwiLFxyXG4gICAgICAgICAgICBcIm5vQ2FuYWxcIjogXCJZb3UgbXVzdCBzZXQgYSB2YWxpZCBjaGFubmVsLlwiLFxyXG4gICAgICAgICAgICBcIm5vM01hc1wiOiBcIllvdSBjYW4ndCBhZGQgbW9yZSB0aGFuIDMgY2hhbm5lbHMgdG8gdGhlIGxpc3Qgb2YgcHJvdGVjdGVkIGNoYW5uZWxzXCIsXHJcbiAgICAgICAgICAgIFwibm9Gb3VuZFwiOiBcIlRoZSBtZW50aW9uZWQgY2hhbm5lbCBpcyBub3QgaW4gdGhlIGxpc3QuXCIsXHJcbiAgICAgICAgICAgIFwibm9DYW5hbGVzXCI6IFwiVGhlcmUgYXJlIGN1cnJlbnRseSBubyBjaGFubmVscyBpbiB0aGUgbGlzdC5cIixcclxuICAgICAgICAgICAgXCJyZW1vdmVBZGRcIjogXCJZb3Ugc2hvdWxkIG1lbnRpb24gYSAnUmVtb3ZlJyAtICdBZGQnIG9wdGlvblwiLFxyXG4gICAgICAgICAgICBcInJlbW92ZUV4aXRvc29cIjogXCJUaGUgY2hhbm5lbCBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgZGVsZXRlZFwiLFxyXG4gICAgICAgICAgICBcInlhRXN0YVwiOiBcIlRoZSBtZW50aW9uZWQgY2hhbm5lbCBpcyBhbHJlYWR5IG9uIHRoaXMgbGlzdCEgWW91IGNhbid0IGFkZCBpdCAyIHRpbWVzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3VnZ2VzdFwiOiB7XHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgc3VnZ2VzdGlvbiB3YXMgc2VudCBjb3JyZWN0bHkuXCIsXHJcbiAgICAgICAgICAgIFwibm9TdWdnZXN0XCI6IFwiWW91IGRpZCBub3QgZW50ZXIgYW55IHN1Z2dlc3Rpb25zIVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiZ2xvYmFsXCI6IHtcclxuICAgICAgICBcIm9ubHlPd25lclwiOiBcIk9ubHkgdGhlIHNlcnZlciBvd25lciBjYW4gcnVuIHRoaXMgY29tbWFuZC5cIixcclxuICAgICAgICBcIm5vU2VhcmNoXCI6IFwiVG8gYWNjZXNzIHRoaXMgY29tbWFuZCB5b3UgbXVzdCBoYXZlIGZpcnN0IHVzZWQgdGhlIGNvbW1hbmQgYFNldHVwYFwiLFxyXG4gICAgICAgIFwibm9QZXJtc1wiOiBcIllvdSByZXF1aXJlIGFkbWluaXN0cmF0b3IgcGVybWlzc2lvbiB0byBydW4gdGhpcyBjb21tYW5kLlwiXHJcbiAgICB9XHJcbn0iXX0=