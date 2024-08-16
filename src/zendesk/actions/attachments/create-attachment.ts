
  import { IResponseAttachmentInterface, TAttachmentOptions } from 'zendesk/models/attachments';
  import { zendeskRequest } from '../../client';
  import { ZendeskOptions } from '../options';
  import { TQorePartialActionWithFunction } from 'global/models/qore';
  import { L } from '../../../i18n/i18n-node';
  
  
  
  const createAttachment = async (attachment : TAttachmentOptions) => {
    try {
      const data: IResponseAttachmentInterface = await zendeskRequest('/uploads', 'POST', {
        attachment,
      });
      return data;
    } catch (error) {
      console.error('Error creating organization:', error);
      throw error;
    }
  };
  
  export default {
    action: 'create_attachment',
    app_function: createAttachment,
    options: ZendeskOptions.attachments.attachmentCreateUpdate,
    response_type: {
        content_type: {
            type: '*string',
            name: 'content_type',
            display_name: L.en.apps.zendesk.actions.attachments.content_type.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.content_type.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.content_type.longDesc(),
            example_value: 'image/png'
        },
        content_url: {
            type: '*string',
            name: 'content_url',
            display_name: L.en.apps.zendesk.actions.attachments.content_url.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.content_url.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.content_url.longDesc(),
            example_value: 'https://example.com/image.png'
        },
        deleted: {
            type: '*boolean',
            name: 'deleted',
            display_name: L.en.apps.zendesk.actions.attachments.deleted.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.deleted.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.deleted.longDesc(),
            example_value: false
        },
        file_name: {
            type: '*string',
            name: 'file_name',
            display_name: L.en.apps.zendesk.actions.attachments.file_name.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.file_name.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.file_name.longDesc(),
            example_value: 'image.png'
        },
        height: {
            type: '*number',
            name: 'height',
            display_name: L.en.apps.zendesk.actions.attachments.height.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.height.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.height.longDesc(),
            example_value:  123
        },
        id: {
            type: '*number',
            name: 'id',
            display_name: L.en.apps.zendesk.actions.attachments.id.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.id.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.id.longDesc(),
            example_value: 123
        },
        inline: {
            type: '*boolean',
            name: 'inline',
            display_name: L.en.apps.zendesk.actions.attachments.inline.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.inline.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.inline.longDesc(),
            example_value: false
        },
        mapped_content_url: {
            type: '*string',
            name: 'mapped_content_url',
            display_name: L.en.apps.zendesk.actions.attachments.mapped_content_url.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.mapped_content_url.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.mapped_content_url.longDesc(),
            example_value: 'https://example.com/image.png'
        },
        size: {
            type: '*number',
            name: 'size',
            display_name: L.en.apps.zendesk.actions.attachments.size.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.size.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.size.longDesc(),
            example_value: 123
        },
        thumbnails: {
            type: '*list',
            name: 'thumbnails',
            display_name: L.en.apps.zendesk.actions.attachments.thumbnails.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.thumbnails.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.thumbnails.longDesc(),
            example_value: [
                {
                    content_type: 'image/png',
                    content_url: 'https://example.com/thumbnail.png',
                    file_name: 'thumbnail.png',
                    height: 123,
                    id: 123,
                    inline: false,
                    mapped_content_url: 'https://example.com/thumbnail.png',
                    size: 123,
                    width: 123
                }
            ]
        },
        url: {
            type: '*string',
            name: 'url',
            display_name: L.en.apps.zendesk.actions.attachments.url.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.url.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.url.longDesc(),
            example_value: 'https://example.com/image.png'
        },
        width: {
            type: '*number',
            name: 'width',
            display_name: L.en.apps.zendesk.actions.attachments.width.displayName(),
            short_desc: L.en.apps.zendesk.actions.attachments.width.shortDesc(),
            desc: L.en.apps.zendesk.actions.attachments.width.longDesc(),
            example_value: 123
        },
    },
  } satisfies TQorePartialActionWithFunction;
  