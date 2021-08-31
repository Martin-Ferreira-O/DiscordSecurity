const admin = {
	'delete-users': {
		ingresarId: 'Enter the user ID',
		idValida: 'Enter a valid ID.',
		noUsers: 'There is no currently added user.',
		noEncontrado: 'This user is not on the list',
		sacado: ' was taken off the list correctly.',
		onlyOwner: 'Only the owner can use this command.',
		noSearch:
			'To access this command you must have first used the command `Setup`',
	},
	addUsers: {
		noValido: 'Enter a valid ID or username',
		yaEsta: 'This user is already on the list',
		agregado: 'Ready, the user was added to the list: ',
	},
	'set-lang': {
		noArgs: 'You must enter a language between `EN (English)` and `EN (Spanish)`',
		cambiado: 'El lenguaje del bot cambió correctamente', // Acá lo pongo en ingles porque esto solo se activa cuando ya lo cambiaron
		selected: 'This language is already selected',
	},
	'ver-usuarios': {
		noUsuario: 'There are no users on my list',
		noSearch:
			'To access this command you must have first used the command `Setup`',
	},
	'force-ban': {
		noUsers:
			"There are no users on the list of malicious users, maybe it's a bug?",
		baneado: 'Baning users, this can take a few minutes',
		desc: 'Many malicious users were banned, here you can get more information.',
		ready: 'Banned users',
		errores: 'Non-baned users',
		reason: 'Forceban',
		noPerms: 'You need to own the server to run this command',
	},
	'protected-channels': {
		establecido: ' was established correctly',
		noPerms: 'You need to own the server to run this command',
		noCanal: 'You must set a valid channel.',
		no3Mas: "You can't add more than 3 channels to the list of protected channels",
		noFound: 'The mentioned channel is not in the list.',
		noCanales: 'There are currently no channels in the list.',
		removeAdd: "You should mention a 'Remove' - 'Add' option",
		removeExitoso: 'The channel has been successfully deleted',
		yaEsta: "The mentioned channel is already on this list! You can't add it 2 times",
	},
	setup: {
		footer1:
			'Write your answer. | If you want to cancel the setting type `exit`',
		descripcion1:
			"Mention to users who will be able to use this bot\nWrite their IDs | Write skip if you've already added them or don't want to add anyone",
		mensajeError: 'This user does not exist, try again.',
		footerError: 'If you want to cancel the setting type `exit`',
		mensajeExtremo:
			'Do you want to turn on extreme mode?\nOnly the owner and previously added users will be able to delete and create channels. `Yes` | `No`',
		respuestaSiNo: 'This is a yes-and-no answer, try again',
		canalEnviar: 'Which channel should I send the attack logs to?',
		noServer: 'The mentioned channel is not on this server',
		autoBan:
			'Do you want every time a malicious user enters to be automatically banned? `Yes` | `No`',
		title2: 'Configuration complete.',
		descripcion2: 'The configuration has been successfully completed.',
		field1: 'Added users',
		field2: 'Extreme mode?',
		field3: 'Channel to send logs',
		field4: 'Ban malicious users?',
		field5: 'Channels protected',
		noTime: 'The time to respond is over.',
		configCompletada: 'Interactive settings off.',
		errorColector: 'The collector stopped because: ',
		error: "Error, here's more information: ",
		si: 'Yes',
		no: 'No',
		nobody: 'Nobody',
		noMas3canales: "You can't set more than 3 channels to protect.",
		noCanal: "You must mention a channel or type 'Skip'",
		protected:
			'Do you want to set protected channels?\nAnyone who deletes them will be automatically banned',
		protectedFooter: "Type 'Ready' to skip this part.",
		autobanFooter: 'Write a yes or no answer',
		footerAttack: 'You should mention a valid channel',
		canalesFooter: 'Type `ready` to finish the setup',
	},
};
export { admin };
