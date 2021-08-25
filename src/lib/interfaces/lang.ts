interface ILang {
	events: {
		message: {
			prefix: string;
			noExiste: string;
			error: string;
			noPerms: string;
		};
		channelDelete: {
			reasonBanXtreme: string;
			reasonBan: string;
			reportChannel1: string;
			reportChannel2Xtreme: string;
			reportChannel2: string;
			creacionCanal: string;
			protegido: string;
		};
		memberAdd: {
			reason: string;
			texto: string;
			error: string;
		};
	};
	commands: {
		help: {
			desc: string;
			commandInfo: string;
			commandNotFound: string;
			noArgsDesc: string;
		};

		invite: {
			desc: string;
			footer: string;
		};
		protected: {
			establecido: string;
			noPerms: string;
			noCanal: string;
			no3Mas: string;
			noFound: string;
			noCanales: string;
			removeAdd: string;
			removeExitoso: string;
			yaEsta: string;
		};
		setup: {
			footer1: string;
			descripcion1: string;
			mensajeError: string;
			footerError: string;
			mensajeExtremo: string;
			respuestaSiNo: string;
			canalEnviar: string;
			noServer: string;
			autoBan: string;
			title2: string;
			descripcion2: string;
			field1: string;
			field2: string;
			field3: string;
			field4: string;
			field5: string;
			noTime: string;
			configCompletada: string;
			errorColector: string;
			error: string;
			si: string;
			no: string;
			nobody: string;
			noMas3canales: string;
			noCanal: string;
			protected: string;
			protectedFooter: string;
			autobanFooter: string;
			footerAttack: string;
			canalesFooter: string;
		};
		deleteUsers: {
			ingresarId: string;
			idValida: string;
			noUsers: string;
			noEncontrado: string;
			sacado: string;
		};
		addUsers: {
			noValido: string;
			yaEsta: string;
			agregado: string;
		};
		setLang: {
			noArgs: string;
			cambiado: string;
			selected: string;
		};
		verUsuarios: {
			noUsuario: string;
		};
		forceban: {
			noUsers: string;
			baneado: string;
			desc: string;
			ready: string;
			errores: string;
			reason: string;
		};
		suggest: {
			description: string;
			noSuggest: string;
		};
	};
	global: {
		onlyOwner: string;
		noSearch: string;
		noPerms: string;
	};
}
export { ILang };
