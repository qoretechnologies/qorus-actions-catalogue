import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IAttachmentsInterface } from 'zendesk/models/attachments';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { L } from '../../../i18n/i18n-node';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';

// Defining a function to fetch attachment
const options: IActionOptions = {
  attachment_id: ZendeskOptions.attachments.id,
};
export const response_type: IActionResponse = {
  content_type: {
    type: 'string',
    name: 'content_type',
    display_name: L.en.apps.zendesk.actions.attachments.upload.displayName(),
    short_desc: L.en.apps.zendesk.actions.attachments.upload.shortDesc(),
    desc: L.en.apps.zendesk.actions.attachments.upload.longDesc(),
    example_value: 'image/png',
  },
  content_url: {
    type: 'string',
    name: 'content_url',
    display_name: L.en.apps.zendesk.actions.attachments.upload.displayName(),
    short_desc: L.en.apps.zendesk.actions.attachments.upload.shortDesc(),
    desc: L.en.apps.zendesk.actions.attachments.upload.longDesc(),
    example_value: 'https://example.com/image.png',
  },
  file_name: {
    type: 'string',
    name: 'file_name',
    display_name: L.en.apps.zendesk.actions.attachments.upload.displayName(),
    short_desc: L.en.apps.zendesk.actions.attachments.upload.shortDesc(),
    desc: L.en.apps.zendesk.actions.attachments.upload.longDesc(),
    example_value: 'image.png',
  },
  id: {
    type: 'number',
    name: 'id',
    display_name: L.en.apps.zendesk.actions.attachments.upload.displayName(),
    short_desc: L.en.apps.zendesk.actions.attachments.upload.shortDesc(),
    desc: L.en.apps.zendesk.actions.attachments.upload.longDesc(),
    example_value: 123,
  },
  size: {
    type: 'number',
    name: 'size',
    display_name: L.en.apps.zendesk.actions.attachments.upload.displayName(),
    short_desc: L.en.apps.zendesk.actions.attachments.upload.shortDesc(),
    desc: L.en.apps.zendesk.actions.attachments.upload.longDesc(),
    example_value: 1024,
  },
  thumbnails: {
    type: 'list',
    name: 'thumbnails',
    display_name: L.en.apps.zendesk.actions.attachments.upload.displayName(),
    short_desc: L.en.apps.zendesk.actions.attachments.upload.shortDesc(),
    desc: L.en.apps.zendesk.actions.attachments.upload.longDesc(),
    example_value: [
      {
        content_url: 'https://example.com/thumbnail.png',
        file_name: 'thumbnail.png',
        id: 123,
        size: 1024,
      },
    ],
  },
  url: {
    type: 'string',
    name: 'url',
    display_name: L.en.apps.zendesk.actions.attachments.upload.displayName(),
    short_desc: L.en.apps.zendesk.actions.attachments.upload.shortDesc(),
    desc: L.en.apps.zendesk.actions.attachments.upload.longDesc(),
    example_value: 'https://example.com/image.png',
  },
};
const getAttachment = async ({ id }: TActionData<typeof options>) => {
  try {
    const data: IAttachmentsInterface = await zendeskRequest(`attachments/${id}.json`, 'GET', {
      id,
    });

    return data;
  } catch (error) {
    console.error('Error fetching attachment:', error);
    throw error;
  }
};

export default {
  action: 'get_attachment',
  api_function: getAttachment,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
