import { TQorePartialActionWithFunction } from 'global/models/qore';
import { zendeskRequest } from '../../client';
import { ZendeskOptions } from '../options';
import { IActionOptions, TActionData } from 'global/models/actions';

// Defining a function to delete attachment
const options: IActionOptions = {
  token: ZendeskOptions.attachments.token,
};
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
  action: 'delete_attachment',
  api_function: deleteAttachment,
  options,
} as TQorePartialActionWithFunction<typeof options>;