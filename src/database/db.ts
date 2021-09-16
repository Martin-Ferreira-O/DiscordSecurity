import { connect } from 'mongoose';

class Database {
	private _URI: string;
	/**
	 * Initial connection
	 * @param {string} URI URI of the database [MongoDB]
	 */
	constructor(URI: string) {
		this._URI = URI;
	}
	/**
	 * connect
	 * Method to connect in the database
	 */
	connect() {
		connect(this._URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
			.then(() =>
				console.log('✔ I successfully connected to the database')
			)
			.catch(() => {
				console.log(
					'[ERROR] The proposed URI in the database is invalid, exiting the program...'
				);
				process.exit(1);
			});
	}
}
export { Database };
