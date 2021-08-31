const events = {
	events: {
		message: {
			prefix: '¡Hola! Mi único prefijo es `d!`, recuerde que sólo puedo trabajar con permisos de administrador, también se recomienda que ponga mi rol en la jerarquía más grande',
			noExiste: 'Este comando no existe',
			error: 'Ups aparentemente hubo un error, aquí hay más información',
			noPerms:
				'No tengo los permisos para trabajar, un administrador debe otorgarme los siguientes permisos: `Banear Miembros`, `Ver registro de auditoria`, `Borrar y crear canales`',
		},
		channelDelete: {
			reasonBanXtreme: 'Usuario borra canales sin estar en la whitelist',
			reasonBan:
				'Usuario borro mas de 3 canales sin estar en la whitelist',
			reportChannel1: 'Se baneo al usuario ',
			reportChannel2Xtreme:
				' por borrar 1 canal sin estar en la whitelist `EXTREM`',
			reportChannel2:
				' por borrar mas de 3 canales sin estar en la whitelist',
			creacionCanal:
				'Un usuario eliminó un canal sin estar en la lista blanca, aquí está el canal :D',
			protegido:
				' Intento borro un canal protegido, por lo que fue automaticamente baneado.',
		},
		memberAdd: {
			reason: 'Este usuario esta catalogado como altamente malicioso.',
			texto: ' fue automaticamente baneado por se catalogado como altamente malicioso.',
			error: '%player% fue detectado como un usuario potencialmente peligroso, debido a mi falta de permisos no pude banearlo.',
		},
	},
};
export { events };
