import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';
import { TQorePartialActionWithFunction } from 'global/models/qore';
import { L } from '../i18n/i18n-node';
import { zendeskRequest } from 'zendesk/client';

const options: IActionOptions = {
  token: {
    display_name: L.en.apps.zendesk.actions.attachments.token.displayName(),
    short_desc: L.en.apps.zendesk.actions.attachments.token.shortDesc(),
    desc: L.en.apps.zendesk.actions.attachments.token.longDesc(),
    type: 'string',
    required: true,
    example_value: '123',
  },
  userId: {
    example_value: 123,
    display_name: L.en.apps.zendesk.actions.attachments.token.displayName(),
    short_desc: L.en.apps.zendesk.actions.attachments.token.shortDesc(),
    desc: L.en.apps.zendesk.actions.attachments.token.longDesc(),
    type: 'int',
  },
};

const response_type: IActionResponse = {
  channel: {
    type: {
      id: {
        display_name: 'test',
        name: 'Channel ID',
        short_desc: 'test',
        desc: 'test',
        type: 'int',
      },
    },
    display_name: 'dname',
    short_desc: 'sdesc',
    desc: 'desc',
  },
};

// Defining a function to delete attachment
const deleteAttachment = async ({ token }: TActionData<typeof options>) => {
  try {
    const data = await zendeskRequest(`/uploads/${token}`, 'DELETE');
    return data;
  } catch (error) {
    console.error('Error delete attachment:', error);
    throw error;
  }
};

export default {
  action: 'delete-attachment',
  api_function: deleteAttachment,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
