import { model, Schema, Document } from 'mongoose';

const vip = new Schema({
	_id: String,
	time: Date,
	buyer: String,
	licence: String,
});

const channel = new Schema({
	_id: String,
	channel: Array,
});

const langs = new Schema({
	_id: String,
	lang: String,
});

const maliciousUser = new Schema({
	users: Array,
});

const messages = new Schema({
	_id: String,
	channel: String,
	messages: Array,
});

const configuration = new Schema({
	_id: String,
	channel: String,
	users: Array,
	extrem: Boolean,
	autoban: Boolean,
	roles: Boolean,
});


export interface IVip extends Document {
	licence: string;
	_id: string;
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

export interface IMalicious extends Document {
	users: Array<string>;
}

export interface Message {
	content: string;
	avatar: string | Buffer;
	username: string;
}

export interface IMessages extends Document {
	_id: string;
	channel: string;
	messages: Array<Message>;
}

export interface IConfiguration extends Document {
	_id: string;
	channel: string;
	users: Array<string>;
	extrem: boolean;
	autoban: boolean;
	roles: boolean;
}

export const Vip = model<IVip>('Vips', vip);
export const Channel = model<IChannel>('Channels', channel);
export const Langs = model<ILangs>('Langs', langs);
export const Maliciuos = model<IMalicious>('Malicious', maliciousUser);
export const Messages = model<IMessages>('messages', messages);
export const Configuration = model<IConfiguration>('Configurator', configuration);
