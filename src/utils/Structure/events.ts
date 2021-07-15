import {ILang} from '../interfaces/index';

export default class BaseEvent {
    name: string;
    private lang: ILang;

    constructor(name: string) {
        this.name = name;
    }
    
}
