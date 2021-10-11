import Bot from '../../bot';
import { MessageEmbed, Util, Message } from 'discord.js';
import { Configuration } from '../../database/';
import { CommandBase } from '../../lib';
export default class MaliciosoCommand extends CommandBase {
	constructor() {
		super('malicioso', 'dev', ['bad-user', 'add-malicius-user'], 3);
	}

	async run(bot: Bot, message: Message, args: Array<string>) {
	
		if (!args[0]) return message.channel.send('No ingresaste ninguna ID');

		const search = await Configuration.findOne();
		// Esto sera para remover usuarios en la lista
		if (['remove', 'remover', 'quitar'].includes(args[0].toLowerCase())) {
			if (!args[1]) return message.channel.send('`[all]` - `[ID]`');
			if (args[1].toLowerCase() == 'all')
				return await Configuration.deleteMany({});
			else { 
				if (!search) {
					return message.channel.send('No hay ningun usuario en la lista');
				} else {
					if (search.users.includes(args[1])) {
						const index = search.users.indexOf(args[1]);
						search.users.splice(index, 1);

						await search.save();
						
						return message.channel.send('Usuario eliminado correctamente');
					} else
						return message.channel.send('No existe ese usuario en mi base de datos');
				}
			}
		}

		let users = [];
		let deleted = 0;
		let invalid = 0;
		let repetidos = 0;
		
		const time = Date.now();

		if (!search) return await Configuration.create({ usuarios: [args[0]] });
		const msg = await message.channel.send('Verificando usuarios');
		
		for (let i = 0; i < args.length; i++) {
			await Util.delayFor(300);
			const userVerified = await bot.getUser(args[i]);
			if (userVerified) {
				if (userVerified.username.startsWith('Deleted User') && !userVerified.avatar) deleted++;

				search.users.includes(userVerified.id) ? repetidos++ : users.push(userVerified.id);				
			}
		}

		search.users = search.users.concat(users);
		await search.save();

		const embed = new MessageEmbed()
			.setAuthor(
				message.member.displayName,
				message.author.avatarURL({ dynamic: true })
			)
			.setTitle('Información')
			.addFields(
				{
					name: 'Usuarios agregados',
					value: `${users.length}`,
					inline: true,
				},
				{
					name: 'Usuarios con cuenta borrada',
					value: `${deleted}`,
					inline: true,
				},
				{
					name: 'Usuarios invalidos',
					value: `${invalid}`,
					inline: true,
				},
				{
					name: 'Usuarios repetidos',
					value: `${repetidos}`,
					inline: true,
				}
			)
			.setFooter(
				`Completado en ${Date.now() - time}ms`,
				message.author.avatarURL({ dynamic: true })
			)
			.setColor('RANDOM');

		await msg.edit({ embeds: [embed], content: 'Done.' });
	}
}
