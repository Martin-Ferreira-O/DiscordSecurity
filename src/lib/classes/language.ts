import * as en from '../../lang/en';
import * as es from '../../lang/es';
import { Langs } from '../../database';
const guilds = new Map<string, any>();
class Language {
	constructor() {
		Langs.find({}).then((data) => {
			for (const guild of data) {
				const { _id, lang } = guild;
				guilds.set(_id, lang == 'es' ? es : en);
			}
		});
	}
	/**
	 * Get the lang of the any guild with the ID
	 * @param id Guild ID
	 * @returns en | es
	 */
	public lang(id: string) {
		return guilds[id] || en;
	}
	/**
	 * Add a new guild in the database
	 * @param {string} guild The id of the guild
	 * @param {string} lang The lang used
	 * @returns Promise<void>
	 */
	public async addGuild(guild: string, lang: string): Promise<void> {
		const language = lang == 'es' ? es : en;
		guilds.set(guild, language);
		try {
			await Langs.create({ _id: guild, lang });
		} catch (ex) {
			await Langs.findByIdAndUpdate(guild, { lang });
		}
	}
}
export { Language };
