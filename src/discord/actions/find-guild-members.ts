import axios from 'axios';

import { DISCORD_BASE_URL } from '../common/discord.constants';
import { PaginationGuildMembersInterface } from './interfaces/pagination-guild-members.interface';
import { Member } from '../models/models';

export const discordFindGuildMembers = async (
  guildId: string,
  token: string,
  params?: PaginationGuildMembersInterface,
): Promise<{ members: Member[]; success: boolean }> => {
  try {
    const response = await axios.get(`${DISCORD_BASE_URL}/guilds/${guildId}/members`, {
      headers: {
        Authorization: `Bot ${token}`,
        'Content-Type': 'application/json',
      },
      params,
    });

    return {
      members: response.data.map((member: Partial<Member> & Record<string, any>) => ({ id: member.user.id, username: member.user.username })),
      success: response.status === 200,
    };
  } catch (error) {
    console.error('Error fetching members:', error.response ? error.response.data : error.message);
    throw error;
  }
};
