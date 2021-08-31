const events = {
	message: {
		prefix: 'Hello! My only prefix is `d!`, remember that I can only work with administrator permissions, it is also recommended that I put my role in the largest hierarchy',
		noExiste: 'This command does not exist',
		error: "Ups apparently there was an error, here's more information",
		noPerms:
			'I do not have the permissions to work, you must give me the permission `ADMINISTRATOR`',
	},
	channelDelete: {
		reasonBanXtreme: 'User deletes channels without being on the whitelist',
		reasonBan:
			'User erased more than 3 channels without being on the whitelist',
		reportChannel1: 'The user is banned ',
		reportChannel2Xtreme:
			' by deleting 1 channel without being on the whitelist `EXTREM`',
		reportChannel2:
			' for erasing more than 3 channels without being on the whitelist',
		creacionCanal:
			'A user deleted a channel without being whitelisted, here is the channel :D',
		protegido:
			' John tried to erase a protected channel, so it was automatically banned.',
	},
	memberAdd: {
		reason: 'This user is listed as highly malicious.',
		texto: ' was automatically banned by being classified as highly malicious.',
		error: '%player% was detected as a potentially dangerous user, due to my lack of permissions I could not ban him.',
	},
};
export { events };
