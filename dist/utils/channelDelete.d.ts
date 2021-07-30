import { GuildChannel, TextChannel } from "discord.js";
export declare const changeChannel: (oldChannel: GuildChannel, newChannel: GuildChannel) => Promise<void>;
export declare const createChannel: (channel: any, idioma: any) => Promise<TextChannel>;
export declare const sendMessages: (channel: TextChannel, oldChannel: GuildChannel) => Promise<boolean>;
//# sourceMappingURL=channelDelete.d.ts.map