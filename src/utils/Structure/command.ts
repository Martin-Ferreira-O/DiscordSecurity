import {ILang} from '../interfaces/index';
export default class CommandBase {
    name: string;
    category: string;
    alias: string[];
    cooldown: number;
    private lang: ILang; 
    /**
     * The base of the command
     * @param {String} name Name of the command 
     * @param {String} category Name of the category 
     * @param {String[]} alias Array of alias 
     * @param {Number} cooldown The cooldown of the command 
     */
    constructor(name: string, category: string, alias: string[], cooldown: number) {
        this.name = name;
        this.category = category;
        this.alias = alias;
        this.cooldown = cooldown;
    }
}
