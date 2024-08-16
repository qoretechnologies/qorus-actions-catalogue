import { ConversationsHistoryResponse, WebClient } from '@slack/web-api';
import { createAction, Property } from 'core/framework';
import { slackAuth } from '../..';
import { slackChannel, slackInfo } from '../common/props';
import { IQoreType, IQoreTypeObject } from 'global/models/qore';

const getChannelHistoryResponseType = {
  messages: {
    type: 'list',
    name: 'messages',
    display_name: 'Messages',
    short_desc: 'The messages in the channel',
    desc: 'The messages in the channel',
    example_value: [
      {
        type: 'object',
        name: 'message',
        display_name: 'Message',
        short_desc: 'A message in the channel',
        desc: 'A message in the channel',
        properties: {
          type: {
            type: '*string',
            name: 'type',
            display_name: 'Type',
            short_desc: 'The type of message',
            desc: 'The type of message',
            example_value: 'message',
          },
          ts: {
            type: '*string',
            name: 'ts',
            display_name: 'Timestamp',
            short_desc: 'The timestamp of the message',
            desc: 'The timestamp of the message',
            example_value: '1234567890.123456',
          },
          user: {
            type: '*string',
            name: 'user',
            display_name: 'User',
            short_desc: 'The user who sent the message',
            desc: 'The user who sent the message',
            example_value: 'U1234567890',
          },
          text: {
            type: '*string',
            name: 'text',
            display_name: 'Text',
            short_desc: 'The text of the message',
            desc: 'The text of the message',
            example_value: 'Hello, world!',
          },
        },
      },
    ],
  },
} satisfies Record<string, IQoreType | IQoreTypeObject>;

export const getChannelHistory = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'getChannelHistory',
  auth: slackAuth,
  displayName: 'Get channel history',
  description:
    'Retrieve all messages from a specific channel ("conversation") between specified timestamps',
  props: {
    info: slackInfo,
    channel: slackChannel(true),
    oldest: Property.Number({
      displayName: 'Oldest',
      description: 'Only messages after this timestamp will be included in results',
      required: false,
    }),
    latest: Property.Number({
      displayName: 'Latest',
      description:
        'Only messages before this timestamp will be included in results. Default is the current time',
      required: false,
    }),
    inclusive: Property.Checkbox({
      displayName: 'Inclusive',
      description:
        'Include messages with oldest or latest timestamps in results. Ignored unless either timestamp is specified',
      defaultValue: false,
      required: true,
    }),
    includeAllMetadata: Property.Checkbox({
      displayName: 'Include all metadata',
      description: 'Return all metadata associated with each message',
      defaultValue: false,
      required: true,
    }),
  },
  responseType: getChannelHistoryResponseType,
  async run({ auth, propsValue }) {
    const client = new WebClient(auth.access_token);
    const messages = [];
    await client.conversations.history({ channel: propsValue.channel });
    for await (const page of client.paginate('conversations.history', {
      channel: propsValue.channel,
      oldest: propsValue.oldest,
      latest: propsValue.latest,
      limit: 200, // page size, does not limit the total number of results
      include_all_metadata: propsValue.includeAllMetadata,
      inclusive: propsValue.inclusive,
    })) {
      const response = page as ConversationsHistoryResponse;
      if (response.messages) {
        messages.push(...response.messages);
      }
    }

    return { messages };
  },
});
