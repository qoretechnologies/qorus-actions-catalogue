import axios from 'axios';

import { CreateGuildChannelInterface } from './interfaces/create-guild-channel.interface';
import { Channel } from '../models/models';
import { DISCORD_BASE_URL } from '../common/discord.constants';

export const discordCreateGuildChannel = async (
  guildId: string,
  data: CreateGuildChannelInterface,
  token: string,
): Promise<Channel> => {
  try {
    const response = await axios.post(`${DISCORD_BASE_URL}/guilds/${guildId}/channels`, data, {
      headers: {
        Authorization: `Bot ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return { id: response.data.id, name: response.data.name, success: response.status === 201 };
  } catch (error) {
    console.error('Error creating channel:', error.response ? error.response.data : error.message);
    throw error;
  }
};
