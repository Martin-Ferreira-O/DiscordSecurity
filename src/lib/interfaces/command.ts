export interface ICommands {
	[x: string]: any;
	name: string;
	alias: string[];
	category: string;
	cooldown: number;
}
