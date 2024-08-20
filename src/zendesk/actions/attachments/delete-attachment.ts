import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';



// Defining a function to delete attachment
const options: IActionOptions = {
  token: ZendeskOptions.attachments.token
};
const response_type: IActionResponse = null;
const deleteAttachment = async ({ token }:  TActionData<typeof options>) => {
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
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;

