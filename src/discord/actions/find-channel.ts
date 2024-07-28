import axios from 'axios';

import { Channel } from '../models/models';
import { DISCORD_BASE_URL } from '../common/discord.constants';

export const discordFindChannelById = async (channelId: string, token: string): Promise<Channel> => {
  try {
    const response = await axios.get(`${DISCORD_BASE_URL}/channels/${channelId}`, {
      headers: {
        Authorization: `Bot ${token}`,
      },
    });

    return { id: response.data?.id, name: response.data?.name, success: response.status === 200 };
  } catch (error) {
    console.error('Error fetch channel:', error.response ? error.response.data : error.message);
    throw error;
  }
};
