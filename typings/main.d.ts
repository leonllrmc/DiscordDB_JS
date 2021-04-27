import { Guild, GuildChannel } from 'discord.js';

export default class DB {
    public channel: GuildChannel;

    public constructor(guild: Guild, channelId: string);
    public getContent(): Promise<any>;
    public setContent(newContent: string | Record<string, unknown>): Promise<void>;
}
