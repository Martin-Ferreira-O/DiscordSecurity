import {ILang} from '../interfaces/index';

export class BaseEvent {
    name: string;
    private lang: ILang;

    constructor(name: string) {
        this.name = name;
    }
    
}
