import { Channel, Guild, Member, Role } from './models/models';

import { discordFindAllGuilds } from './actions/find-guilds';
import { discordFindGuildById } from './actions/find-guild';
import { discordFindChannelById } from './actions/find-channel';
import { discordCreateGuildRole } from './actions/create-guild-role';
import { discordCreateGuildChannel } from './actions/create-guild-channel';
import { discordFindGuildMembers } from './actions/find-guild-members';

import { CreateGuildRoleInterface } from './actions/interfaces/create-guild-role.interface';
import { CreateGuildChannelInterface } from './actions/interfaces/create-guild-channel.interface';
import { PaginationGuildMembersInterface } from './actions/interfaces/pagination-guild-members.interface';

class DiscordApi {
  private readonly token: string;
  constructor(token: string) {
    this.token = token;
  }

  public discordFindAllGuilds(): Promise<Guild[]> {
    return discordFindAllGuilds(this.token);
  }

  public discordFindGuildById(guildId: string): Promise<any> {
    return discordFindGuildById(guildId, this.token);
  }

  public discordFindChannelById(channelId: string): Promise<Channel> {
    return discordFindChannelById(channelId, this.token);
  }

  public discordCreateGuildRole(guildId: string, data: CreateGuildRoleInterface): Promise<Role> {
    return discordCreateGuildRole(guildId, data, this.token);
  }

  public discordCreateGuildChannel(guildId: string, data: CreateGuildChannelInterface): Promise<Channel> {
    return discordCreateGuildChannel(guildId, data, this.token);
  }

  public discordFindGuildMembers(
    guildId: string,
    params?: PaginationGuildMembersInterface,
  ): Promise<{ members: Member[]; success: boolean }> {
    return discordFindGuildMembers(guildId, this.token, params);
  }
}

export default DiscordApi;
