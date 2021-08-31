const admin = {
	'protected-channels': {
		establecido: ' Fue establecido correctamente',
		noPerms: 'Necesitas ser dueño del servidor para ejecutar este comando',
		noCanal: 'Debes establecer un canal valido.',
		no3Mas: 'No puedes agregar mas de 3 canales en la lista de canales protegidos',
		noFound: 'El canal mencionado no esta en la lista.',
		noCanales: 'No hay canales en la lista actualmente.',
		removeAdd: 'Debes mencionar una opción `d` - `Añadir`',
		removeExitoso: 'Se ha eliminado el canal correctamente',
		yaEsta: 'El canal mencionado ya esta en esta lista! No puedes agregarlo 2 veces',
	},
	setup: {
		footer1:
			'Debes mencionar a los usuarios. | Si quieres cancelar la configuración escribe `exit`',
		descripcion1:
			'Mencionar a los usuarios que podrán utilizar este bot\nEscribe sus IDs | Escribe listo si ya los has añadido o no quieres agregar a nadie',
		mensajeError: 'Este usuario o canal no existe, inténtelo de nuevo.',
		footerError: 'Si quieres cancelar la configuración escribe `exit`',
		mensajeExtremo:
			'¿Quieres activar el modo extremo?\nSolo el dueño y los usuarios agregados anteriormente podran borrar y crear canales. `Si` | `No`',
		respuestaSiNo: 'Esto es una respuesta de si y no, intentalo denuevo',
		canalEnviar:
			'¿A que canal deberia enviar los registros de ataque?\nEn este avisare cada vez que alguien intente raidear un canal.',
		noServer: 'El canal mencionado no esta en este servidor',
		autoBan:
			'¿Quieres activar la opción de autobaneo?\nCada ves que entre un usuario peligroso sera automaticamente baneado.',
		title2: 'Configuración completada.',
		descripcion2: 'La configuración ha sido completada con exito.',
		field1: 'Usuarios agregados',
		field2: '¿Modo extremo?',
		field3: 'Canal a enviar registros',
		field4: '¿Banear usuarios maliciosos?',
		field5: 'Canales protegidos',
		noTime: 'El tiempo para responder ha terminado.',
		configCompletada: 'Configuración interactiva apagada.',
		errorColector: 'El colector paro porqué: ',
		error: 'Error, aca tienes mas información: ',
		si: 'Sí',
		no: 'No',
		nobody: 'Ninguno',
		noMas3canales: 'No puedes establecer mas de 3 canales para proteger.',
		noCanal: 'Debes mencionar un canal o escribir `Skip` | `Listo`',
		protected:
			'¿Deseas establecer canales protegidos?\nEstos cualquiera que los borre sera automaticamente baneados',
		protectedFooter: 'Escribe `Listo` | `Skip` para saltar esta parte.',
		autobanFooter: 'Escribe una respuesta de Si o No',
		footerAttack: 'Debes mencionar un canal valido',
		canalesFooter: "Escribe 'listo' para terminar la configuración",
	},
	'delete-users': {
		ingresarId: 'Ingresa la ID del usuario',
		idValida: 'Ingresa una ID valida.',
		noUsers: 'No hay ningun usuario agregado actualmente.',
		noEncontrado: 'Este usuario no esta en la lista',
		sacado: ' fue sacado de la lista correctamente.',
		onlyOwner: 'Solo el dueño del servidor puede ejecutar este comando.',
		noSearch:
			'Para acceder a este comando debes haber usado primero el comando `Setup`',
	},
	adduser: {
		noValido: 'Ingrese una ID o un username valido',
		yaEsta: 'Este usuario ya esta en la lista',
		agregado: 'Listo, se agrego a la lista el usuario: ',
	},
	'set-lang': {
		noArgs: 'Debes ingresar un idioma entre `EN (Ingles)` y `ES (Español)`',
		cambiado: "The bot's language changed successfully", // Acá lo pongo en ingles porque esto solo se activa cuando ya lo cambiaron
		selected: 'Este idioma ya esta seleccionado',
	},
	'ver-usuarios': {
		noUsuario: 'No hay usuarios en mi lista',
		onlyOwner: 'Solo el dueño del servidor puede ejecutar este comando.',
	},
	'force-ban': {
		noUsers:
			'No hay usuarios en la lista de usuarios maliciosos, ¿A lo mejor es un error?',
		baneado: 'Baneando usuarios, esto puede tardar unos minutos',
		desc: 'Muchos usuarios maliciosos fueron baneados, acá puedes obtener mas información.',
		ready: 'Usuarios baneados',
		errores: 'Usuarios no baneados',
		reason: 'Forceban',
		noPerms:
			'Requieres el permiso de administrador para ejecutar este comando.',
	},
};
export { admin };
