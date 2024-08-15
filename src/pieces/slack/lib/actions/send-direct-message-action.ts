import { createAction } from 'core/framework';
import { slackSendMessage } from '../common/utils';
import { slackAuth } from '../../';
import { assertNotNullOrUndefined } from 'core/shared';
import { profilePicture, text, userId, username, blocks } from '../common/props';

export const slackSendDirectMessageAction = createAction({
  auth: slackAuth,
  name: 'send_direct_message',
  displayName: 'Send Message To A User',
  description: 'Send message to a user',
  props: {
    userId,
    text,
    username,
    profilePicture,
    blocks,
  },
  async run(context) {
    const token = context.auth.access_token;
    const { text, userId, blocks } = context.propsValue;

    assertNotNullOrUndefined(token, 'token');
    assertNotNullOrUndefined(text, 'text');
    assertNotNullOrUndefined(userId, 'userId');

    return slackSendMessage({
      token,
      text,
      username: context.propsValue.username,
      profilePicture: context.propsValue.profilePicture,
      conversationId: userId,
      blocks,
    });
  },
});
