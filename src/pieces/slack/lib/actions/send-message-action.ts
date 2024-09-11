import { createAction, Property } from 'core/framework';
import { IActionResponse } from 'global/models/actions';
import { slackAuth } from '../../';
import { blocks, profilePicture, slackChannel, slackInfo, username } from '../common/props';
import { processMessageTimestamp, slackSendMessage } from '../common/utils';

const slackSendChannelMessageResponseType: IActionResponse = {
  ok: {
    type: 'boolean',
    name: 'ok',
    display_name: 'Success',
    short_desc: 'Indicates if the message was sent successfully',
    desc: 'Indicates if the message was sent successfully',
    example_value: true,
  },
  channel: {
    type: 'string',
    name: 'channel',
    display_name: 'Channel',
    short_desc: 'The channel where the message was sent',
    desc: 'The channel where the message was sent',
    example_value: 'C1234567890',
  },
  ts: {
    type: 'string',
    name: 'ts',
    display_name: 'Timestamp',
    short_desc: 'The timestamp of the message',
    desc: 'The timestamp of the message',
    example_value: '1234567890.123456',
  },
  message: {
    name: 'message',
    display_name: 'Message',
    short_desc: 'The message that was sent',
    desc: 'The message that was sent',
    type: {
      user: {
        type: 'string',
        name: 'user',
        display_name: 'User',
        short_desc: 'The user who sent the message',
        desc: 'The user who sent the message',
        example_value: 'U1234567890',
      },
      type: {
        type: 'string',
        name: 'type',
        display_name: 'Type',
        short_desc: 'The type of message',
        desc: 'The type of message',
        example_value: 'message',
      },
      ts: {
        type: 'string',
        name: 'ts',
        display_name: 'Timestamp',
        short_desc: 'The timestamp of the message',
        desc: 'The timestamp of the message',
        example_value: '1234567890.123456',
      },
    },
  },
};

export const slackSendMessageAction = createAction({
  auth: slackAuth,
  name: 'send_channel_message',
  displayName: 'Send Message To A Channel',
  description: 'Send message to a channel',
  props: {
    info: slackInfo,
    channel: slackChannel(true),
    text: Property.LongText({
      displayName: 'Message',
      description: 'The text of your message',
      required: true,
    }),
    username,
    profilePicture,
    file: Property.File({
      displayName: 'Attachment',
      required: false,
    }),
    threadTs: Property.ShortText({
      displayName: 'Thread ts',
      description:
        'Provide the ts (timestamp) value of the **parent** message to make this message a reply. Do not use the ts value of the reply itself; use its parent instead. For example `1710304378.475129`.Alternatively, you can easily obtain the message link by clicking on the three dots next to the parent message and selecting the `Copy link` option.',
      required: false,
    }),
    blocks,
  },
  responseType: slackSendChannelMessageResponseType,
  async run(context) {
    const token = context.auth.access_token;
    const { text, channel, username, profilePicture, threadTs, file, blocks } = context.propsValue;

    return slackSendMessage({
      token,
      text,
      username,
      profilePicture,
      conversationId: channel,
      threadTs: threadTs ? processMessageTimestamp(threadTs) : undefined,
      file,
      blocks,
    });
  },
});
