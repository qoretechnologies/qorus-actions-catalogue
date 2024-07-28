import axios from 'axios';

import { CreateGuildRoleInterface } from './interfaces/create-guild-role.interface';
import { Role } from '../models/models';
import { DISCORD_BASE_URL } from '../common/discord.constants';

export const discordCreateGuildRole = async (
  guildId: string,
  data: CreateGuildRoleInterface,
  token: string,
): Promise<Role> => {
  try {
    const response = await axios.post(`${DISCORD_BASE_URL}/guilds/${guildId}/roles`, data, {
      headers: {
        Authorization: `Bot ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return { id: response.data.id, name: response.data.name, success: response.status === 201 };
  } catch (error) {
    console.error('Error creating role:', error.response ? error.response.data : error.message);
    throw error;
  }
};
