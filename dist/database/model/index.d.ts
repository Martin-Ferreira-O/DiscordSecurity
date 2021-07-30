import { Document } from 'mongoose';
export declare const Vip: import("mongoose").Model<IVip, {}>;
export declare const Channel: import("mongoose").Model<IChannel, {}>;
export declare const Langs: import("mongoose").Model<ILangs, {}>;
export declare const Malicioso: import("mongoose").Model<IMalicioso, {}>;
export declare const Messages: import("mongoose").Model<IMessages, {}>;
export declare const Registrador: import("mongoose").Model<IRegistrador, {}>;
export interface IVip extends Document {
    licence: string;
    guildId: string;
    time: Date;
    buyer: string;
}
export interface IChannel extends Document {
    _id: string;
    channel: Array<string>;
}
export interface ILangs extends Document {
    _id: string;
    lang: string;
}
export interface IMalicioso extends Document {
    usuarios: Array<string>;
}
export interface IMessages extends Document {
    _id: string;
    channel: string;
    messages: Array<any>;
}
export interface IRegistrador extends Document {
    _id: string;
    channel: string;
    users: Array<string>;
    extrem: Boolean;
    autoban: Boolean;
    roles: Boolean;
}
//# sourceMappingURL=index.d.ts.map