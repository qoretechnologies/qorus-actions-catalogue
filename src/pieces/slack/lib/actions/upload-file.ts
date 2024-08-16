import { createAction, Property } from 'core/framework';
import { slackAuth } from '../../index';
import { WebClient } from '@slack/web-api';
import { IQoreType, IQoreTypeObject } from '../../../../global/models/qore';

const uploadFileResponseType = {
  ok: {
    type: '*boolean',
    name: 'ok',
    display_name: 'Success',
    short_desc: 'Indicates if the file was uploaded successfully',
    desc: 'Indicates if the file was uploaded successfully',
    example_value: true,
  },
  file: {
    name: 'file',
    display_name: 'File',
    short_desc: 'The uploaded file',
    desc: 'The uploaded file',
    type: {
      id: {
        type: '*string',
        name: 'id',
        display_name: 'File ID',
        short_desc: 'The unique identifier for the file',
        desc: 'The unique identifier for the file',
        example_value: 'F1234567890',
      },
      created: {
        type: '*number',
        name: 'created',
        display_name: 'Created',
        short_desc: 'The timestamp when the file was created',
        desc: 'The timestamp when the file was created',
        example_value: 1234567890,
      },
      timestamp: {
        type: '*number',
        name: 'timestamp',
        display_name: 'Timestamp',
        short_desc: 'The timestamp when the file was uploaded',
        desc: 'The timestamp when the file was uploaded',
        example_value: 1234567890,
      },
      name: {
        type: '*string',
        name: 'name',
        display_name: 'Name',
        short_desc: 'The name of the file',
        desc: 'The name of the file',
        example_value: 'example.txt',
      },
      title: {
        type: '*string',
        name: 'title',
        display_name: 'Title',
        short_desc: 'The title of the file',
        desc: 'The title of the file',
        example_value: 'Example',
      },
      mimetype: {
        type: '*string',
        name: 'mimetype',
        display_name: 'MIME Type',
        short_desc: 'The MIME type of the file',
        desc: 'The MIME type of the file',
        example_value: 'text/plain',
      },
      filetype: {
        type: '*string',
        name: 'filetype',
        display_name: 'File Type',
        short_desc: 'The type of file',
        desc: 'The type of file',
        example_value: 'text',
      },
      pretty_type: {
        type: '*string',
        name: 'pretty_type',
        display_name: 'Pretty Type',
        short_desc: 'The pretty type of the file',
        desc: 'The pretty type of the file',
        example_value: 'Text',
      },
      user: {
        type: '*string',
        name: 'user',
        display_name: 'User',
        short_desc: 'The user who uploaded the file',
        desc: 'The user who uploaded the file',
        example_value: 'U1234567890',
      },
      editable: {
        type: '*boolean',
        name: 'editable',
        display_name: 'Editable',
        short_desc: 'Indicates if the file is editable',
        desc: 'Indicates if the file is editable',
        example_value: true,
      },
      size: {
        type: '*number',
        name: 'size',
        display_name: 'Size',
        short_desc: 'The size of the file in bytes',
        desc: 'The size of the file in bytes',
        example_value: 12345,
      },
      mode: {
        type: '*string',
        name: 'mode',
        display_name: 'Mode',
        short_desc: 'The mode of the file',
        desc: 'The mode of the file',
        example_value: 'snippet',
      },
      is_external: {
        type: '*boolean',
        name: 'is_external',
        display_name: 'External',
        short_desc: 'Indicates if the file is external',
        desc: 'Indicates if the file is external',
        example_value: false,
      },
      external_type: {
        type: '*string',
        name: 'external_type',
        display_name: 'External Type',
        short_desc: 'The external type of the file',
        desc: 'The external type of the file',
        example_value: '',
      },
      is_public: {
        type: '*boolean',
        name: 'is_public',
        display_name: 'Public',
        short_desc: 'Indicates if the file is public',
        desc: 'Indicates if the file is public',
        example_value: true,
      },
      public_url_shared: {
        type: '*boolean',
        name: 'public_url_shared',
        display_name: 'Public URL Shared',
        short_desc: 'Indicates if the public URL is shared',
        desc: 'Indicates if the public URL is shared',
        example_value: true,
      },
      display_as_bot: {
        type: '*boolean',
        name: 'display_as_bot',
        display_name: 'Display as Bot',
        short_desc: 'Indicates if the file is displayed as a bot',
        desc: 'Indicates if the file is displayed as a bot',
        example_value: false,
      },
      username: {
        type: '*string',
        name: 'username',
        display_name: 'Username',
        short_desc: 'The username of the file',
        desc: 'The username of the file',
        example_value: '',
      },
      url_private: {
        type: '*string',
        name: 'url_private',
        display_name: 'Private URL',
        short_desc: 'The private URL of the file',
        desc: 'The private URL of the file',
        example_value: 'https://files.slack.com/files-pri/T12345678-F12345678/example.txt',
      },
      url_private_download: {
        type: '*string',
        name: 'url_private_download',
        display_name: 'Private Download URL',
        short_desc: 'The private download URL of the file',
        desc: 'The private download URL of the file',
        example_value: 'https://files.slack.com/files-pri/T12345678-F12345678/download/example.txt',
      },
      permalink: {
        type: '*string',
        name: 'permalink',
        display_name: 'Permalink',
        short_desc: 'The permalink of the file',
        desc: 'The permalink of the file',
        example_value: 'https://your-workspace.slack.com/files/U12345678/F12345678/example.txt',
      },
      permalink_public: {
        type: '*string',
        name: 'permalink_public',
        display_name: 'Public Permalink',
        short_desc: 'The public permalink of the file',
        desc: 'The public permalink of the file',
        example_value: 'https://your-workspace.slack.com/files-pri/T12345678-F12345678/example.txt',
      },
      is_starred: {
        type: '*boolean',
        name: 'is_starred',
        display_name: 'Starred',
        short_desc: 'Indicates if the file is starred',
        desc: 'Indicates if the file is starred',
        example_value: false,
      },
    },
  },
} satisfies Record<string, IQoreType | IQoreTypeObject>;

export const uploadFile = createAction({
  auth: slackAuth,
  name: 'uploadFile',
  displayName: 'Upload file',
  description: 'Upload file without sharing it to a channel or user',
  props: {
    file: Property.File({
      displayName: 'Attachment',
      required: true,
    }),
    title: Property.ShortText({
      displayName: 'Title',
      required: false,
    }),
    filename: Property.ShortText({
      displayName: 'Filename',
      required: false,
    }),
  },
  responseType: uploadFileResponseType,
  async run(context) {
    const token = context.auth.access_token;
    const { file, title, filename } = context.propsValue;
    const client = new WebClient(token);

    return await client.files.uploadV2({
      file_uploads: [{ file: file.data, filename: filename || file.filename }],
      title: title,
    });
  },
});
