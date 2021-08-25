// If a user creates many roles at the same time, he will be self-banned.
import { Registrador } from '../../database/';
import { BaseEvent } from '../../lib';
import Bot from '../../bot';
import { Role } from 'discord.js';
const ratelimit = new Map();
export default class RoleCreateEvent extends BaseEvent {
	constructor() {
		super('roleCreate');
	}
	async run(bot: Bot, role: Role): Promise<void> {
		if (
			!role.guild.me.permissions.has([
				'BAN_MEMBERS',
				'MANAGE_ROLES',
				'VIEW_AUDIT_LOG',
			])
		)
			return;
		const search = await Registrador.findById(role.guild.id);
		if (!search || !search.roles) return;

		const fetchedLogs = await role.guild.fetchAuditLogs({
			limit: 1,
			type: 'CHANNEL_DELETE',
		});
		if (fetchedLogs) {
			const { executor } = fetchedLogs.entries.first();
			if (executor) {
				if (ratelimit.has(executor.id)) {
					if (ratelimit.get(executor.id) >= 5) {
						await role.guild.members.ban(executor);
					} else {
						ratelimit.set(
							executor.id,
							ratelimit.get(executor.id) + 1
						);
					}
				} else {
					ratelimit.set(executor.id, 1);
				}
			}

			setTimeout(() => ratelimit.delete(executor.id), 10 * 1000); // 10 seconds
		}
	}
}
