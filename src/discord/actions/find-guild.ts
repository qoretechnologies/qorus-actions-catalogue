import axios from 'axios';
import { DISCORD_BASE_URL } from '../common/discord.constants';

export const discordFindGuildById = async (guildId: string, token: string): Promise<any> => {
  try {
    const response = await axios.get(`${DISCORD_BASE_URL}/guilds/${guildId}`, {
      headers: {
        Authorization: `Bot ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching guild:', error.response ? error.response.data : error.message);
    throw error;
  }
};
