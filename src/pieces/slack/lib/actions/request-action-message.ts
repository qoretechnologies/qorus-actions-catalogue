import { createAction } from 'core/framework';
import { slackAuth } from '../..';
import { assertNotNullOrUndefined } from 'core/shared';
import { profilePicture, text, slackChannel, username, actions, slackInfo } from '../common/props';
import { requestAction } from '../common/request-action';

export const requestActionMessageAction = createAction({
  auth: slackAuth,
  name: 'request_action_message',
  displayName: 'Request Action in A Channel',
  description: 'Send a message in a channel and wait until an action is selected',
  props: {
    info: slackInfo,
    channel: slackChannel(true),
    text,
    actions,
    username,
    profilePicture,
  },
  async run(context) {
    const { channel } = context.propsValue;
    assertNotNullOrUndefined(channel, 'channel');

    return await requestAction(channel, context);
  },
});
