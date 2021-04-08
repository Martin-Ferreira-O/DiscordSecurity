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
            "reportChannel2": " por borrar mas de 3 canales sin estar en la whitelist"
        },
        "memberAdd": {
            "reason": "Este usuario esta catalogado como altamente malicioso.",
            "texto": " fue automaticamente baneado por se catalogado como altamente malicioso.",
            "error": " esta detectado como usuario malicioso, sin embargo no puedo banearlo"
        }

    },

    "commands": {
        "setup": {
            "footer1": "Escribe tu respuesta. | Si quieres cancelar la configuración escribe `exit`",
            "descripcion1": "Mencionar a los usuarios que podrán utilizar este bot\nEscribe sus IDs | Escribe listo si ya los has añadido o no quieres agregar a nadie",
            "mensajeError": "Este usuario no existe, inténtelo de nuevo.",
            "footerError": "Si quieres cancelar la configuración escribe `exit`",
            "mensajeExtremo": "¿Quieres activar el modo extremo?\nSolo el dueño y los usuarios agregados anteriormente podran borrar y crear canales. `Si` | `No`",
            "respuestaSiNo": "Esto es una respuesta de si y no, intentalo denuevo",
            "canalEnviar": "¿A que canal deberia enviar los registros de ataque?",
            "noServer": "El canal mencionado no esta en este servidor",
            "autoBan": "¿Quieres que cada ves que entre un usuario malicioso se le banee automaticamente? `Si` | `No`",
            "title2": "Configuración completada.",
            "descripcion2": "La configuración ha sido completada con exito.",
            "field1": "Usuarios agregados",
            "field2": "¿Modo extremo?",
            "field3": "Canal a enviar registros",
            "field4": "¿Banear usuarios maliciosos?",
            "noTime": "El tiempo para responder ha terminado.",
            "configCompletada": "Configuración interactiva apagada.",
            "errorColector": "El colector paro porqué: ",
            "error": "Error, aca tienes mas información: "
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
            "cambiado": "The bot's language changed successfully" // Acá lo pongo en ingles porque esto solo se activa cuando ya lo cambiaron
        },
        "verUsuarios": {
            "noUsuario": "No hay usuarios en mi lista"
        },
        "forceban": {
            "noUsers": "No hay usuarios en la lista de usuarios maliciosos, ¿A lo mejor es un error?",
            "baneado": "Baneando usuarios...",
            "ready": " Fueron baneados correctamente."
        }
    },
    "global": {
        "onlyOwner": "Solo el dueño del servidor puede ejecutar este comando.",
        "noSearch": "Para acceder a este comando debes haber usado primero el comando `Setup`",
        "noPerms": "Requieres el permiso de administrador para ejecutar este comando."
    }

}