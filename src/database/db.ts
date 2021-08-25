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
	public connect() {
		connect(this._URI)
			.then(() =>
				console.log('✔ I successfully connecte to the database')
			)
			.catch(() => {
				console.log(
					'[ERROR] I did not connect to the database, exiting...'
				);
				process.exit(1);
			});
	}
}
export { Database };
