import { createAction, Property } from 'core/framework';
import { slackAuth } from '../..';
import { blocks, slackChannel, slackInfo } from '../common/props';
import { processMessageTimestamp } from '../common/utils';
import { Block, WebClient } from '@slack/web-api';

export const updateMessage = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'updateMessage',
  displayName: 'Update message',
  description: 'Update an existing message',
  auth: slackAuth,
  props: {
    info: slackInfo,
    channel: slackChannel(true),
    ts: Property.ShortText({
      displayName: 'Message Timestamp',
      description:
        'Please provide the timestamp of the message you wish to update, such as `1710304378.475129`. Alternatively, you can easily obtain the message link by clicking on the three dots next to the message and selecting the `Copy link` option.',
      required: true,
    }),
    text: Property.LongText({
      displayName: 'Message',
      description: 'The updated text of your message',
      required: true,
    }),
    blocks,
  },
  async run({ auth, propsValue }) {
    const messageTimestamp = processMessageTimestamp(propsValue.ts);
    if (!messageTimestamp) {
      throw new Error('Invalid Timestamp Value.');
    }
    const client = new WebClient(auth.access_token);

    return await client.chat.update({
      channel: propsValue.channel,
      ts: messageTimestamp,
      text: propsValue.text,
      blocks: propsValue.blocks as unknown as Block[],
    });
  },
});
