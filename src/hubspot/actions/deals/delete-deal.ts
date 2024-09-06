import { TQorePartialActionWithFunction } from 'global/models/qore';
import { hubspotRequest } from '../../client';
import { IActionOptions, IActionResponse, TActionData } from 'global/models/actions';

// Defining a function to delete deal
const options: IActionOptions = null;
export const response_type: IActionResponse = {};
const deletedeal = async ({ id }: TActionData<typeof options>) => {
  try {
    const data = await hubspotRequest(`/objects/deals/${id}`, 'DELETE');
    return data;
  } catch (error) {
    console.error('Error delete deal:', error);
    throw error;
  }
};

export default {
  action: 'delete_deal',
  api_function: deletedeal,
  options,
  response_type,
} as TQorePartialActionWithFunction<typeof options, typeof response_type>;
