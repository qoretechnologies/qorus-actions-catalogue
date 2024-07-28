import axios from 'axios';

import { Guild } from '../models/models';
import { DISCORD_BASE_URL } from '../common/discord.constants';

export const discordFindAllGuilds = async (token: string): Promise<Guild[]> => {
  try {
    const response = await axios.get(`${DISCORD_BASE_URL}/users/@me/guilds`, {
      headers: {
        Authorization: `Bot ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching guilds:', error.response ? error.response.data : error.message);
    throw error;
  }
};
