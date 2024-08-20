import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { TAttachmentOptions } from 'zendesk/models/attachments';
import { IActionOptions, IActionResponse } from 'global/models/actions';



// Defining a function to delete attachment
const deleteAttachment = async ({ token }: TAttachmentOptions) => {
  try {
    const data = await zendeskRequest(`/uploads/${token}`, 'DELETE');
    return data;
  } catch (error) {
    console.error('Error delete attachment:', error);
    throw error;
  }
};

export default {
  action: 'delete_attachment',
  app_function: deleteAttachment,
  options: {
    token: ZendeskOptions.attachments.token
  },
  response_type: null,
}as TQorePartialActionWithFunction<IActionOptions, IActionResponse>;

