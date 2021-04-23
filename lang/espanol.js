export default {
    "events": {
        "message": {
            "prefix": "¡Hola! Mi único prefijo es `d!`, recuerde que sólo puedo trabajar con permisos de administrador, también se recomienda que ponga mi rol en la jerarquía más grande",
            "noExiste": "Este comando no existe",
            "error": "Ups aparentemente hubo un error, aquí hay más información",
            "noPerms": "No tengo los permisos para trabajar, usted debe darme el permiso `ADMINISTRADOR`"
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
            "error": " esta detectado como usuario malicioso, sin embargo no puedo banearlo"
        }

    },

    "commands": {
        "help": {
            "desc": "Para obtener una información detallada de que hace el bot puedes revisar el [GitHub del creador](https://github.com/Kapone-dev/DiscordSecurity)"
        },
        "credits": {
            "desc": "Mi creador es ! Kapone#0001. Tuvo la idea al ver a los servidores de sus conocidos ser raideado, también quiero agradecer a [✨Elraccion#2440](https://www.youtube.com/channel/UCFm4plOV3l_E0EWQthI_q1Q) por las grandes ideas que me dejó para no abandonar el proyecto.\nAdemás, por último, gracias Noise#9938 por ayudarme a crear el proyecto y probarlo.",
            "footer": "Discord Security es un proyecto beta que ayudará a evitar que su servidor sea fácilmente raideado."
        },
        "invite": {
            "desc": "Puede invitar al bot [Usando este vínculo](https://discordapp.com/oauth2/authorize?client_id=733155251569295451&scope=bot&permissions=8). También puede revisar la documentación y el código del bot [Usando este otro enlace](https://github.com/Kapone-dev/DiscordSecurity)",
            "footer": "Necesitas permisos de administración de servidores para invitarme."
        },
        "protected": {
            "establecido": " Fue establecido correctamente",
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
            "cambiado": "The bot's language changed successfully", // Acá lo pongo en ingles porque esto solo se activa cuando ya lo cambiaron
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
            "errores": "Usuarios no baneados"
        },
        "suggest": {
            "description": "La sugerencia fue enviada correctamente."
        }
    },
    "global": {
        "onlyOwner": "Solo el dueño del servidor puede ejecutar este comando.",
        "noSearch": "Para acceder a este comando debes haber usado primero el comando `Setup`",
        "noPerms": "Requieres el permiso de administrador para ejecutar este comando."
    }

}