import {GuildChannel, Message, Client } from 'discord.js';

export class Discord_DB  {
    public channel: GuildChannel;

    public constructor(channel: string | GuildChannel, client: Client);
    public getContent(): Promise<any>;
    public setContent(newContent: string | Record<string, unknown>): Promise<void>;
}
export class MsgDiscord_DB {
    public channel: GuildChannel;
    public msg: Message;

    public constructor(message: string | Message,channel: string | GuildChannel, client: Client);
    public getContent(): Promise<any>;
    public setContent(newContent: string | Record<string, unknown>): Promise<void>;
}
