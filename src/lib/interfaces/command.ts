export interface ICommands {
	[x: string]: any;
	name: string;
	aliases: string[];
	category: string;
	cooldown: number;
}
