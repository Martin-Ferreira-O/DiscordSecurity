"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "events": {
        "message": {
            "prefix": "¡Hola! Mi único prefijo es `d!`, recuerde que sólo puedo trabajar con permisos de administrador, también se recomienda que ponga mi rol en la jerarquía más grande",
            "noExiste": "Este comando no existe",
            "error": "Ups aparentemente hubo un error, aquí hay más información",
            "noPerms": "No tengo los permisos para trabajar, un administrador debe otorgarme los siguientes permisos: `Banear Miembros`, `Ver registro de auditoria`, `Borrar y crear canales`"
        },
        "channelDelete": {
            "reasonBanXtreme": "Usuario borra canales sin estar en la whitelist",
            "reasonBan": "Usuario borro mas de 3 canales sin estar en la whitelist",
            "reportChannel1": "Se baneo al usuario ",
            "reportChannel2Xtreme": " por borrar 1 canal sin estar en la whitelist `EXTREM`",
            "reportChannel2": " por borrar mas de 3 canales sin estar en la whitelist",
            "creacionCanal": "Un usuario eliminó un canal sin estar en la lista blanca, aquí está el canal :D",
            "protegido": " Intento borro un canal protegido, por lo que fue automaticamente baneado."
        },
        "memberAdd": {
            "reason": "Este usuario esta catalogado como altamente malicioso.",
            "texto": " fue automaticamente baneado por se catalogado como altamente malicioso.",
            "error": "%player% fue detectado como un usuario potencialmente peligroso, debido a mi falta de permisos no pude banearlo."
        }
    },
    "commands": {
        "help": {
            "desc": "Para obtener una información detallada de que hace el bot puedes revisar el [GitHub del creador](https://github.com/Kapone-dev/DiscordSecurity)",
            "commandInfo": "Aquí tienes información sobre el comando %command%",
            "commandNotFound": "El comando mencionado `%command%` no es válido",
            "noArgsDesc": "Puedes encontrar todos mis comandos en el siguiente formato, si necesita más información sobre cada comando, simplemente use d!help <Comando>"
        },
        "invite": {
            "desc": "Puede invitar al bot [Usando este vínculo](https://discordapp.com/oauth2/authorize?client_id=823693385046949929&scope=bot&permissions=8). También puede revisar la documentación y el código del bot [Usando este otro enlace](https://github.com/Kapone-dev/DiscordSecurity)",
            "footer": "Necesitas permisos de administración de servidores para invitarme."
        },
        "protected": {
            "establecido": " Fue establecido correctamente",
            "noPerms": "Necesitas ser dueño del servidor para ejecutar este comando",
            "noCanal": "Debes establecer un canal valido.",
            "no3Mas": "No puedes agregar mas de 3 canales en la lista de canales protegidos",
            "noFound": "El canal mencionado no esta en la lista.",
            "noCanales": "No hay canales en la lista actualmente.",
            "removeAdd": "Debes mencionar una opción `Remover` - `Añadir`",
            "removeExitoso": "Se ha eliminado el canal correctamente",
            "yaEsta": "El canal mencionado ya esta en esta lista! No puedes agregarlo 2 veces"
        },
        "setup": {
            "footer1": "Debes mencionar a los usuarios. | Si quieres cancelar la configuración escribe `exit`",
            "descripcion1": "Mencionar a los usuarios que podrán utilizar este bot\nEscribe sus IDs | Escribe listo si ya los has añadido o no quieres agregar a nadie",
            "mensajeError": "Este usuario no existe, inténtelo de nuevo.",
            "footerError": "Si quieres cancelar la configuración escribe `exit`",
            "mensajeExtremo": "¿Quieres activar el modo extremo?\nSolo el dueño y los usuarios agregados anteriormente podran borrar y crear canales. `Si` | `No`",
            "respuestaSiNo": "Esto es una respuesta de si y no, intentalo denuevo",
            "canalEnviar": "¿A que canal deberia enviar los registros de ataque?\nEn este avisare cada vez que alguien intente raidear un canal.",
            "noServer": "El canal mencionado no esta en este servidor",
            "autoBan": "¿Quieres activar la opción de autobaneo?\nCada ves que entre un usuario peligroso sera automaticamente baneado.",
            "title2": "Configuración completada.",
            "descripcion2": "La configuración ha sido completada con exito.",
            "field1": "Usuarios agregados",
            "field2": "¿Modo extremo?",
            "field3": "Canal a enviar registros",
            "field4": "¿Banear usuarios maliciosos?",
            "field5": "Canales protegidos",
            "noTime": "El tiempo para responder ha terminado.",
            "configCompletada": "Configuración interactiva apagada.",
            "errorColector": "El colector paro porqué: ",
            "error": "Error, aca tienes mas información: ",
            "si": "Si",
            "no": "No",
            "nobody": "Ninguno",
            "noMas3canales": "No puedes establecer mas de 3 canales para proteger.",
            "noCanal": "Debes mencionar un canal o escribir `Skip` | `Listo`",
            "protected": "¿Deseas establecer canales protegidos?\nEstos cualquiera que los borre sera automaticamente baneados",
            "protectedFooter": "Escribe `Listo` | `Skip` para saltar esta parte.",
            "autobanFooter": "Escribe una respuesta de Si o No",
            "footerAttack": "Debes mencionar un canal valido",
            "canalesFooter": "Escribe 'listo' para terminar la configuración"
        },
        "deleteUsers": {
            "ingresarId": "Ingresa la ID del usuario",
            "idValida": "Ingresa una ID valida.",
            "noUsers": "No hay ningun usuario agregado actualmente.",
            "noEncontrado": "Este usuario no esta en la lista",
            "sacado": " fue sacado de la lista correctamente."
        },
        "addUsers": {
            "noValido": "Ingrese una ID o un username valido",
            "yaEsta": "Este usuario ya esta en la lista",
            "agregado": "Listo, se agrego a la lista el usuario: "
        },
        "setLang": {
            "noArgs": "Debes ingresar un idioma entre `EN (Ingles)` y `ES (Español)`",
            "cambiado": "The bot's language changed successfully",
            "selected": "Este idioma ya esta seleccionado"
        },
        "verUsuarios": {
            "noUsuario": "No hay usuarios en mi lista"
        },
        "forceban": {
            "noUsers": "No hay usuarios en la lista de usuarios maliciosos, ¿A lo mejor es un error?",
            "baneado": "Baneando usuarios, esto puede tardar unos minutos",
            "desc": "Muchos usuarios maliciosos fueron baneados, acá puedes obtener mas información.",
            "ready": "Usuarios baneados",
            "errores": "Usuarios no baneados",
            "reason": "Forceban"
        },
        "suggest": {
            "description": "La sugerencia fue enviada correctamente.",
            "noSuggest": "¡No ingresaste ninguna sugerencia!"
        }
    },
    "global": {
        "onlyOwner": "Solo el dueño del servidor puede ejecutar este comando.",
        "noSearch": "Para acceder a este comando debes haber usado primero el comando `Setup`",
        "noPerms": "Requieres el permiso de administrador para ejecutar este comando."
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNwYW5vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYW5nL2VzcGFub2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBZTtJQUNYLFFBQVEsRUFBRTtRQUNOLFNBQVMsRUFBRTtZQUNQLFFBQVEsRUFBRSxvS0FBb0s7WUFDOUssVUFBVSxFQUFFLHdCQUF3QjtZQUNwQyxPQUFPLEVBQUUsMkRBQTJEO1lBQ3BFLFNBQVMsRUFBRSx3S0FBd0s7U0FDdEw7UUFDRCxlQUFlLEVBQUU7WUFDYixpQkFBaUIsRUFBRSxpREFBaUQ7WUFDcEUsV0FBVyxFQUFFLDBEQUEwRDtZQUN2RSxnQkFBZ0IsRUFBRSxzQkFBc0I7WUFDeEMsc0JBQXNCLEVBQUUsd0RBQXdEO1lBQ2hGLGdCQUFnQixFQUFFLHdEQUF3RDtZQUMxRSxlQUFlLEVBQUUsaUZBQWlGO1lBQ2xHLFdBQVcsRUFBRSw0RUFBNEU7U0FDNUY7UUFDRCxXQUFXLEVBQUU7WUFDVCxRQUFRLEVBQUUsd0RBQXdEO1lBQ2xFLE9BQU8sRUFBRSwwRUFBMEU7WUFDbkYsT0FBTyxFQUFFLGtIQUFrSDtTQUM5SDtLQUNKO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osTUFBTSxFQUFFLGlKQUFpSjtZQUN6SixhQUFhLEVBQUUsb0RBQW9EO1lBQ25FLGlCQUFpQixFQUFFLGdEQUFnRDtZQUNuRSxZQUFZLEVBQUUsK0lBQStJO1NBQ2hLO1FBQ0QsUUFBUSxFQUFFO1lBQ04sTUFBTSxFQUFFLCtRQUErUTtZQUN2UixRQUFRLEVBQUUsb0VBQW9FO1NBQ2pGO1FBQ0QsV0FBVyxFQUFFO1lBQ1QsYUFBYSxFQUFFLGdDQUFnQztZQUMvQyxTQUFTLEVBQUUsNkRBQTZEO1lBQ3hFLFNBQVMsRUFBRSxtQ0FBbUM7WUFDOUMsUUFBUSxFQUFFLHNFQUFzRTtZQUNoRixTQUFTLEVBQUUsMENBQTBDO1lBQ3JELFdBQVcsRUFBRSx5Q0FBeUM7WUFDdEQsV0FBVyxFQUFFLGlEQUFpRDtZQUM5RCxlQUFlLEVBQUUsd0NBQXdDO1lBQ3pELFFBQVEsRUFBRSx3RUFBd0U7U0FDckY7UUFDRCxPQUFPLEVBQUU7WUFDTCxTQUFTLEVBQUUsdUZBQXVGO1lBQ2xHLGNBQWMsRUFBRSwySUFBMkk7WUFDM0osY0FBYyxFQUFFLDZDQUE2QztZQUM3RCxhQUFhLEVBQUUscURBQXFEO1lBQ3BFLGdCQUFnQixFQUFFLG9JQUFvSTtZQUN0SixlQUFlLEVBQUUscURBQXFEO1lBQ3RFLGFBQWEsRUFBRSxzSEFBc0g7WUFDckksVUFBVSxFQUFFLDhDQUE4QztZQUMxRCxTQUFTLEVBQUUsaUhBQWlIO1lBQzVILFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsY0FBYyxFQUFFLGdEQUFnRDtZQUNoRSxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLHdDQUF3QztZQUNsRCxrQkFBa0IsRUFBRSxvQ0FBb0M7WUFDeEQsZUFBZSxFQUFFLDJCQUEyQjtZQUM1QyxPQUFPLEVBQUUscUNBQXFDO1lBQzlDLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsU0FBUztZQUNuQixlQUFlLEVBQUUsc0RBQXNEO1lBQ3ZFLFNBQVMsRUFBRSxzREFBc0Q7WUFDakUsV0FBVyxFQUFFLHNHQUFzRztZQUNuSCxpQkFBaUIsRUFBRSxrREFBa0Q7WUFDckUsZUFBZSxFQUFFLGtDQUFrQztZQUNuRCxjQUFjLEVBQUUsaUNBQWlDO1lBQ2pELGVBQWUsRUFBRSxnREFBZ0Q7U0FDcEU7UUFDRCxhQUFhLEVBQUU7WUFDWCxZQUFZLEVBQUUsMkJBQTJCO1lBQ3pDLFVBQVUsRUFBRSx3QkFBd0I7WUFDcEMsU0FBUyxFQUFFLDZDQUE2QztZQUN4RCxjQUFjLEVBQUUsa0NBQWtDO1lBQ2xELFFBQVEsRUFBRSx3Q0FBd0M7U0FDckQ7UUFDRCxVQUFVLEVBQUU7WUFDUixVQUFVLEVBQUUscUNBQXFDO1lBQ2pELFFBQVEsRUFBRSxrQ0FBa0M7WUFDNUMsVUFBVSxFQUFFLDBDQUEwQztTQUN6RDtRQUNELFNBQVMsRUFBRTtZQUNQLFFBQVEsRUFBRSwrREFBK0Q7WUFDekUsVUFBVSxFQUFFLHlDQUF5QztZQUNyRCxVQUFVLEVBQUUsa0NBQWtDO1NBQ2pEO1FBQ0QsYUFBYSxFQUFFO1lBQ1gsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QztRQUNELFVBQVUsRUFBRTtZQUNSLFNBQVMsRUFBRSw4RUFBOEU7WUFDekYsU0FBUyxFQUFFLG1EQUFtRDtZQUM5RCxNQUFNLEVBQUUsaUZBQWlGO1lBQ3pGLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsU0FBUyxFQUFFLHNCQUFzQjtZQUNqQyxRQUFRLEVBQUUsVUFBVTtTQUN2QjtRQUNELFNBQVMsRUFBRTtZQUNQLGFBQWEsRUFBRSwwQ0FBMEM7WUFDekQsV0FBVyxFQUFFLG9DQUFvQztTQUNwRDtLQUNKO0lBQ0QsUUFBUSxFQUFFO1FBQ04sV0FBVyxFQUFFLHlEQUF5RDtRQUN0RSxVQUFVLEVBQUUsMEVBQTBFO1FBQ3RGLFNBQVMsRUFBRSxtRUFBbUU7S0FDakY7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCJldmVudHNcIjoge1xyXG4gICAgICAgIFwibWVzc2FnZVwiOiB7XHJcbiAgICAgICAgICAgIFwicHJlZml4XCI6IFwiwqFIb2xhISBNaSDDum5pY28gcHJlZmlqbyBlcyBgZCFgLCByZWN1ZXJkZSBxdWUgc8OzbG8gcHVlZG8gdHJhYmFqYXIgY29uIHBlcm1pc29zIGRlIGFkbWluaXN0cmFkb3IsIHRhbWJpw6luIHNlIHJlY29taWVuZGEgcXVlIHBvbmdhIG1pIHJvbCBlbiBsYSBqZXJhcnF1w61hIG3DoXMgZ3JhbmRlXCIsXHJcbiAgICAgICAgICAgIFwibm9FeGlzdGVcIjogXCJFc3RlIGNvbWFuZG8gbm8gZXhpc3RlXCIsXHJcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJVcHMgYXBhcmVudGVtZW50ZSBodWJvIHVuIGVycm9yLCBhcXXDrSBoYXkgbcOhcyBpbmZvcm1hY2nDs25cIixcclxuICAgICAgICAgICAgXCJub1Blcm1zXCI6IFwiTm8gdGVuZ28gbG9zIHBlcm1pc29zIHBhcmEgdHJhYmFqYXIsIHVuIGFkbWluaXN0cmFkb3IgZGViZSBvdG9yZ2FybWUgbG9zIHNpZ3VpZW50ZXMgcGVybWlzb3M6IGBCYW5lYXIgTWllbWJyb3NgLCBgVmVyIHJlZ2lzdHJvIGRlIGF1ZGl0b3JpYWAsIGBCb3JyYXIgeSBjcmVhciBjYW5hbGVzYFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNoYW5uZWxEZWxldGVcIjoge1xyXG4gICAgICAgICAgICBcInJlYXNvbkJhblh0cmVtZVwiOiBcIlVzdWFyaW8gYm9ycmEgY2FuYWxlcyBzaW4gZXN0YXIgZW4gbGEgd2hpdGVsaXN0XCIsXHJcbiAgICAgICAgICAgIFwicmVhc29uQmFuXCI6IFwiVXN1YXJpbyBib3JybyBtYXMgZGUgMyBjYW5hbGVzIHNpbiBlc3RhciBlbiBsYSB3aGl0ZWxpc3RcIixcclxuICAgICAgICAgICAgXCJyZXBvcnRDaGFubmVsMVwiOiBcIlNlIGJhbmVvIGFsIHVzdWFyaW8gXCIsXHJcbiAgICAgICAgICAgIFwicmVwb3J0Q2hhbm5lbDJYdHJlbWVcIjogXCIgcG9yIGJvcnJhciAxIGNhbmFsIHNpbiBlc3RhciBlbiBsYSB3aGl0ZWxpc3QgYEVYVFJFTWBcIixcclxuICAgICAgICAgICAgXCJyZXBvcnRDaGFubmVsMlwiOiBcIiBwb3IgYm9ycmFyIG1hcyBkZSAzIGNhbmFsZXMgc2luIGVzdGFyIGVuIGxhIHdoaXRlbGlzdFwiLFxyXG4gICAgICAgICAgICBcImNyZWFjaW9uQ2FuYWxcIjogXCJVbiB1c3VhcmlvIGVsaW1pbsOzIHVuIGNhbmFsIHNpbiBlc3RhciBlbiBsYSBsaXN0YSBibGFuY2EsIGFxdcOtIGVzdMOhIGVsIGNhbmFsIDpEXCIsXHJcbiAgICAgICAgICAgIFwicHJvdGVnaWRvXCI6IFwiIEludGVudG8gYm9ycm8gdW4gY2FuYWwgcHJvdGVnaWRvLCBwb3IgbG8gcXVlIGZ1ZSBhdXRvbWF0aWNhbWVudGUgYmFuZWFkby5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtZW1iZXJBZGRcIjoge1xyXG4gICAgICAgICAgICBcInJlYXNvblwiOiBcIkVzdGUgdXN1YXJpbyBlc3RhIGNhdGFsb2dhZG8gY29tbyBhbHRhbWVudGUgbWFsaWNpb3NvLlwiLFxyXG4gICAgICAgICAgICBcInRleHRvXCI6IFwiIGZ1ZSBhdXRvbWF0aWNhbWVudGUgYmFuZWFkbyBwb3Igc2UgY2F0YWxvZ2FkbyBjb21vIGFsdGFtZW50ZSBtYWxpY2lvc28uXCIsXHJcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCIlcGxheWVyJSBmdWUgZGV0ZWN0YWRvIGNvbW8gdW4gdXN1YXJpbyBwb3RlbmNpYWxtZW50ZSBwZWxpZ3Jvc28sIGRlYmlkbyBhIG1pIGZhbHRhIGRlIHBlcm1pc29zIG5vIHB1ZGUgYmFuZWFybG8uXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJjb21tYW5kc1wiOiB7XHJcbiAgICAgICAgXCJoZWxwXCI6IHtcclxuICAgICAgICAgICAgXCJkZXNjXCI6IFwiUGFyYSBvYnRlbmVyIHVuYSBpbmZvcm1hY2nDs24gZGV0YWxsYWRhIGRlIHF1ZSBoYWNlIGVsIGJvdCBwdWVkZXMgcmV2aXNhciBlbCBbR2l0SHViIGRlbCBjcmVhZG9yXShodHRwczovL2dpdGh1Yi5jb20vS2Fwb25lLWRldi9EaXNjb3JkU2VjdXJpdHkpXCIsXHJcbiAgICAgICAgICAgIFwiY29tbWFuZEluZm9cIjogXCJBcXXDrSB0aWVuZXMgaW5mb3JtYWNpw7NuIHNvYnJlIGVsIGNvbWFuZG8gJWNvbW1hbmQlXCIsXHJcbiAgICAgICAgICAgIFwiY29tbWFuZE5vdEZvdW5kXCI6IFwiRWwgY29tYW5kbyBtZW5jaW9uYWRvIGAlY29tbWFuZCVgIG5vIGVzIHbDoWxpZG9cIixcclxuICAgICAgICAgICAgXCJub0FyZ3NEZXNjXCI6IFwiUHVlZGVzIGVuY29udHJhciB0b2RvcyBtaXMgY29tYW5kb3MgZW4gZWwgc2lndWllbnRlIGZvcm1hdG8sIHNpIG5lY2VzaXRhIG3DoXMgaW5mb3JtYWNpw7NuIHNvYnJlIGNhZGEgY29tYW5kbywgc2ltcGxlbWVudGUgdXNlIGQhaGVscCA8Q29tYW5kbz5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpbnZpdGVcIjoge1xyXG4gICAgICAgICAgICBcImRlc2NcIjogXCJQdWVkZSBpbnZpdGFyIGFsIGJvdCBbVXNhbmRvIGVzdGUgdsOtbmN1bG9dKGh0dHBzOi8vZGlzY29yZGFwcC5jb20vb2F1dGgyL2F1dGhvcml6ZT9jbGllbnRfaWQ9ODIzNjkzMzg1MDQ2OTQ5OTI5JnNjb3BlPWJvdCZwZXJtaXNzaW9ucz04KS4gVGFtYmnDqW4gcHVlZGUgcmV2aXNhciBsYSBkb2N1bWVudGFjacOzbiB5IGVsIGPDs2RpZ28gZGVsIGJvdCBbVXNhbmRvIGVzdGUgb3RybyBlbmxhY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9LYXBvbmUtZGV2L0Rpc2NvcmRTZWN1cml0eSlcIixcclxuICAgICAgICAgICAgXCJmb290ZXJcIjogXCJOZWNlc2l0YXMgcGVybWlzb3MgZGUgYWRtaW5pc3RyYWNpw7NuIGRlIHNlcnZpZG9yZXMgcGFyYSBpbnZpdGFybWUuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicHJvdGVjdGVkXCI6IHtcclxuICAgICAgICAgICAgXCJlc3RhYmxlY2lkb1wiOiBcIiBGdWUgZXN0YWJsZWNpZG8gY29ycmVjdGFtZW50ZVwiLFxyXG4gICAgICAgICAgICBcIm5vUGVybXNcIjogXCJOZWNlc2l0YXMgc2VyIGR1ZcOxbyBkZWwgc2Vydmlkb3IgcGFyYSBlamVjdXRhciBlc3RlIGNvbWFuZG9cIixcclxuICAgICAgICAgICAgXCJub0NhbmFsXCI6IFwiRGViZXMgZXN0YWJsZWNlciB1biBjYW5hbCB2YWxpZG8uXCIsXHJcbiAgICAgICAgICAgIFwibm8zTWFzXCI6IFwiTm8gcHVlZGVzIGFncmVnYXIgbWFzIGRlIDMgY2FuYWxlcyBlbiBsYSBsaXN0YSBkZSBjYW5hbGVzIHByb3RlZ2lkb3NcIixcclxuICAgICAgICAgICAgXCJub0ZvdW5kXCI6IFwiRWwgY2FuYWwgbWVuY2lvbmFkbyBubyBlc3RhIGVuIGxhIGxpc3RhLlwiLFxyXG4gICAgICAgICAgICBcIm5vQ2FuYWxlc1wiOiBcIk5vIGhheSBjYW5hbGVzIGVuIGxhIGxpc3RhIGFjdHVhbG1lbnRlLlwiLFxyXG4gICAgICAgICAgICBcInJlbW92ZUFkZFwiOiBcIkRlYmVzIG1lbmNpb25hciB1bmEgb3BjacOzbiBgUmVtb3ZlcmAgLSBgQcOxYWRpcmBcIixcclxuICAgICAgICAgICAgXCJyZW1vdmVFeGl0b3NvXCI6IFwiU2UgaGEgZWxpbWluYWRvIGVsIGNhbmFsIGNvcnJlY3RhbWVudGVcIixcclxuICAgICAgICAgICAgXCJ5YUVzdGFcIjogXCJFbCBjYW5hbCBtZW5jaW9uYWRvIHlhIGVzdGEgZW4gZXN0YSBsaXN0YSEgTm8gcHVlZGVzIGFncmVnYXJsbyAyIHZlY2VzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2V0dXBcIjoge1xyXG4gICAgICAgICAgICBcImZvb3RlcjFcIjogXCJEZWJlcyBtZW5jaW9uYXIgYSBsb3MgdXN1YXJpb3MuIHwgU2kgcXVpZXJlcyBjYW5jZWxhciBsYSBjb25maWd1cmFjacOzbiBlc2NyaWJlIGBleGl0YFwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXBjaW9uMVwiOiBcIk1lbmNpb25hciBhIGxvcyB1c3VhcmlvcyBxdWUgcG9kcsOhbiB1dGlsaXphciBlc3RlIGJvdFxcbkVzY3JpYmUgc3VzIElEcyB8IEVzY3JpYmUgbGlzdG8gc2kgeWEgbG9zIGhhcyBhw7FhZGlkbyBvIG5vIHF1aWVyZXMgYWdyZWdhciBhIG5hZGllXCIsXHJcbiAgICAgICAgICAgIFwibWVuc2FqZUVycm9yXCI6IFwiRXN0ZSB1c3VhcmlvIG5vIGV4aXN0ZSwgaW50w6ludGVsbyBkZSBudWV2by5cIixcclxuICAgICAgICAgICAgXCJmb290ZXJFcnJvclwiOiBcIlNpIHF1aWVyZXMgY2FuY2VsYXIgbGEgY29uZmlndXJhY2nDs24gZXNjcmliZSBgZXhpdGBcIixcclxuICAgICAgICAgICAgXCJtZW5zYWplRXh0cmVtb1wiOiBcIsK/UXVpZXJlcyBhY3RpdmFyIGVsIG1vZG8gZXh0cmVtbz9cXG5Tb2xvIGVsIGR1ZcOxbyB5IGxvcyB1c3VhcmlvcyBhZ3JlZ2Fkb3MgYW50ZXJpb3JtZW50ZSBwb2RyYW4gYm9ycmFyIHkgY3JlYXIgY2FuYWxlcy4gYFNpYCB8IGBOb2BcIixcclxuICAgICAgICAgICAgXCJyZXNwdWVzdGFTaU5vXCI6IFwiRXN0byBlcyB1bmEgcmVzcHVlc3RhIGRlIHNpIHkgbm8sIGludGVudGFsbyBkZW51ZXZvXCIsXHJcbiAgICAgICAgICAgIFwiY2FuYWxFbnZpYXJcIjogXCLCv0EgcXVlIGNhbmFsIGRlYmVyaWEgZW52aWFyIGxvcyByZWdpc3Ryb3MgZGUgYXRhcXVlP1xcbkVuIGVzdGUgYXZpc2FyZSBjYWRhIHZleiBxdWUgYWxndWllbiBpbnRlbnRlIHJhaWRlYXIgdW4gY2FuYWwuXCIsXHJcbiAgICAgICAgICAgIFwibm9TZXJ2ZXJcIjogXCJFbCBjYW5hbCBtZW5jaW9uYWRvIG5vIGVzdGEgZW4gZXN0ZSBzZXJ2aWRvclwiLFxyXG4gICAgICAgICAgICBcImF1dG9CYW5cIjogXCLCv1F1aWVyZXMgYWN0aXZhciBsYSBvcGNpw7NuIGRlIGF1dG9iYW5lbz9cXG5DYWRhIHZlcyBxdWUgZW50cmUgdW4gdXN1YXJpbyBwZWxpZ3Jvc28gc2VyYSBhdXRvbWF0aWNhbWVudGUgYmFuZWFkby5cIixcclxuICAgICAgICAgICAgXCJ0aXRsZTJcIjogXCJDb25maWd1cmFjacOzbiBjb21wbGV0YWRhLlwiLFxyXG4gICAgICAgICAgICBcImRlc2NyaXBjaW9uMlwiOiBcIkxhIGNvbmZpZ3VyYWNpw7NuIGhhIHNpZG8gY29tcGxldGFkYSBjb24gZXhpdG8uXCIsXHJcbiAgICAgICAgICAgIFwiZmllbGQxXCI6IFwiVXN1YXJpb3MgYWdyZWdhZG9zXCIsXHJcbiAgICAgICAgICAgIFwiZmllbGQyXCI6IFwiwr9Nb2RvIGV4dHJlbW8/XCIsXHJcbiAgICAgICAgICAgIFwiZmllbGQzXCI6IFwiQ2FuYWwgYSBlbnZpYXIgcmVnaXN0cm9zXCIsXHJcbiAgICAgICAgICAgIFwiZmllbGQ0XCI6IFwiwr9CYW5lYXIgdXN1YXJpb3MgbWFsaWNpb3Nvcz9cIixcclxuICAgICAgICAgICAgXCJmaWVsZDVcIjogXCJDYW5hbGVzIHByb3RlZ2lkb3NcIixcclxuICAgICAgICAgICAgXCJub1RpbWVcIjogXCJFbCB0aWVtcG8gcGFyYSByZXNwb25kZXIgaGEgdGVybWluYWRvLlwiLFxyXG4gICAgICAgICAgICBcImNvbmZpZ0NvbXBsZXRhZGFcIjogXCJDb25maWd1cmFjacOzbiBpbnRlcmFjdGl2YSBhcGFnYWRhLlwiLFxyXG4gICAgICAgICAgICBcImVycm9yQ29sZWN0b3JcIjogXCJFbCBjb2xlY3RvciBwYXJvIHBvcnF1w6k6IFwiLFxyXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiRXJyb3IsIGFjYSB0aWVuZXMgbWFzIGluZm9ybWFjacOzbjogXCIsXHJcbiAgICAgICAgICAgIFwic2lcIjogXCJTaVwiLFxyXG4gICAgICAgICAgICBcIm5vXCI6IFwiTm9cIixcclxuICAgICAgICAgICAgXCJub2JvZHlcIjogXCJOaW5ndW5vXCIsXHJcbiAgICAgICAgICAgIFwibm9NYXMzY2FuYWxlc1wiOiBcIk5vIHB1ZWRlcyBlc3RhYmxlY2VyIG1hcyBkZSAzIGNhbmFsZXMgcGFyYSBwcm90ZWdlci5cIixcclxuICAgICAgICAgICAgXCJub0NhbmFsXCI6IFwiRGViZXMgbWVuY2lvbmFyIHVuIGNhbmFsIG8gZXNjcmliaXIgYFNraXBgIHwgYExpc3RvYFwiLFxyXG4gICAgICAgICAgICBcInByb3RlY3RlZFwiOiBcIsK/RGVzZWFzIGVzdGFibGVjZXIgY2FuYWxlcyBwcm90ZWdpZG9zP1xcbkVzdG9zIGN1YWxxdWllcmEgcXVlIGxvcyBib3JyZSBzZXJhIGF1dG9tYXRpY2FtZW50ZSBiYW5lYWRvc1wiLFxyXG4gICAgICAgICAgICBcInByb3RlY3RlZEZvb3RlclwiOiBcIkVzY3JpYmUgYExpc3RvYCB8IGBTa2lwYCBwYXJhIHNhbHRhciBlc3RhIHBhcnRlLlwiLFxyXG4gICAgICAgICAgICBcImF1dG9iYW5Gb290ZXJcIjogXCJFc2NyaWJlIHVuYSByZXNwdWVzdGEgZGUgU2kgbyBOb1wiLFxyXG4gICAgICAgICAgICBcImZvb3RlckF0dGFja1wiOiBcIkRlYmVzIG1lbmNpb25hciB1biBjYW5hbCB2YWxpZG9cIixcclxuICAgICAgICAgICAgXCJjYW5hbGVzRm9vdGVyXCI6IFwiRXNjcmliZSAnbGlzdG8nIHBhcmEgdGVybWluYXIgbGEgY29uZmlndXJhY2nDs25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZWxldGVVc2Vyc1wiOiB7XHJcbiAgICAgICAgICAgIFwiaW5ncmVzYXJJZFwiOiBcIkluZ3Jlc2EgbGEgSUQgZGVsIHVzdWFyaW9cIixcclxuICAgICAgICAgICAgXCJpZFZhbGlkYVwiOiBcIkluZ3Jlc2EgdW5hIElEIHZhbGlkYS5cIixcclxuICAgICAgICAgICAgXCJub1VzZXJzXCI6IFwiTm8gaGF5IG5pbmd1biB1c3VhcmlvIGFncmVnYWRvIGFjdHVhbG1lbnRlLlwiLFxyXG4gICAgICAgICAgICBcIm5vRW5jb250cmFkb1wiOiBcIkVzdGUgdXN1YXJpbyBubyBlc3RhIGVuIGxhIGxpc3RhXCIsXHJcbiAgICAgICAgICAgIFwic2FjYWRvXCI6IFwiIGZ1ZSBzYWNhZG8gZGUgbGEgbGlzdGEgY29ycmVjdGFtZW50ZS5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhZGRVc2Vyc1wiOiB7XHJcbiAgICAgICAgICAgIFwibm9WYWxpZG9cIjogXCJJbmdyZXNlIHVuYSBJRCBvIHVuIHVzZXJuYW1lIHZhbGlkb1wiLFxyXG4gICAgICAgICAgICBcInlhRXN0YVwiOiBcIkVzdGUgdXN1YXJpbyB5YSBlc3RhIGVuIGxhIGxpc3RhXCIsXHJcbiAgICAgICAgICAgIFwiYWdyZWdhZG9cIjogXCJMaXN0bywgc2UgYWdyZWdvIGEgbGEgbGlzdGEgZWwgdXN1YXJpbzogXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2V0TGFuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwibm9BcmdzXCI6IFwiRGViZXMgaW5ncmVzYXIgdW4gaWRpb21hIGVudHJlIGBFTiAoSW5nbGVzKWAgeSBgRVMgKEVzcGHDsW9sKWBcIixcclxuICAgICAgICAgICAgXCJjYW1iaWFkb1wiOiBcIlRoZSBib3QncyBsYW5ndWFnZSBjaGFuZ2VkIHN1Y2Nlc3NmdWxseVwiLCAvLyBBY8OhIGxvIHBvbmdvIGVuIGluZ2xlcyBwb3JxdWUgZXN0byBzb2xvIHNlIGFjdGl2YSBjdWFuZG8geWEgbG8gY2FtYmlhcm9uXHJcbiAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogXCJFc3RlIGlkaW9tYSB5YSBlc3RhIHNlbGVjY2lvbmFkb1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZlclVzdWFyaW9zXCI6IHtcclxuICAgICAgICAgICAgXCJub1VzdWFyaW9cIjogXCJObyBoYXkgdXN1YXJpb3MgZW4gbWkgbGlzdGFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJmb3JjZWJhblwiOiB7XHJcbiAgICAgICAgICAgIFwibm9Vc2Vyc1wiOiBcIk5vIGhheSB1c3VhcmlvcyBlbiBsYSBsaXN0YSBkZSB1c3VhcmlvcyBtYWxpY2lvc29zLCDCv0EgbG8gbWVqb3IgZXMgdW4gZXJyb3I/XCIsXHJcbiAgICAgICAgICAgIFwiYmFuZWFkb1wiOiBcIkJhbmVhbmRvIHVzdWFyaW9zLCBlc3RvIHB1ZWRlIHRhcmRhciB1bm9zIG1pbnV0b3NcIixcclxuICAgICAgICAgICAgXCJkZXNjXCI6IFwiTXVjaG9zIHVzdWFyaW9zIG1hbGljaW9zb3MgZnVlcm9uIGJhbmVhZG9zLCBhY8OhIHB1ZWRlcyBvYnRlbmVyIG1hcyBpbmZvcm1hY2nDs24uXCIsXHJcbiAgICAgICAgICAgIFwicmVhZHlcIjogXCJVc3VhcmlvcyBiYW5lYWRvc1wiLFxyXG4gICAgICAgICAgICBcImVycm9yZXNcIjogXCJVc3VhcmlvcyBubyBiYW5lYWRvc1wiLFxyXG4gICAgICAgICAgICBcInJlYXNvblwiOiBcIkZvcmNlYmFuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3VnZ2VzdFwiOiB7XHJcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMYSBzdWdlcmVuY2lhIGZ1ZSBlbnZpYWRhIGNvcnJlY3RhbWVudGUuXCIsXHJcbiAgICAgICAgICAgIFwibm9TdWdnZXN0XCI6IFwiwqFObyBpbmdyZXNhc3RlIG5pbmd1bmEgc3VnZXJlbmNpYSFcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcImdsb2JhbFwiOiB7XHJcbiAgICAgICAgXCJvbmx5T3duZXJcIjogXCJTb2xvIGVsIGR1ZcOxbyBkZWwgc2Vydmlkb3IgcHVlZGUgZWplY3V0YXIgZXN0ZSBjb21hbmRvLlwiLFxyXG4gICAgICAgIFwibm9TZWFyY2hcIjogXCJQYXJhIGFjY2VkZXIgYSBlc3RlIGNvbWFuZG8gZGViZXMgaGFiZXIgdXNhZG8gcHJpbWVybyBlbCBjb21hbmRvIGBTZXR1cGBcIixcclxuICAgICAgICBcIm5vUGVybXNcIjogXCJSZXF1aWVyZXMgZWwgcGVybWlzbyBkZSBhZG1pbmlzdHJhZG9yIHBhcmEgZWplY3V0YXIgZXN0ZSBjb21hbmRvLlwiXHJcbiAgICB9XHJcbn0iXX0=