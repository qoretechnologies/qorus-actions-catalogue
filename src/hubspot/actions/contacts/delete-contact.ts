import { TQorePartialActionWithFunction } from 'global/models/qore';
import { hubspotRequest } from '../../client';
import { IActionOptions, TActionData } from 'global/models/actions';

// Defining a function to delete contact
const options: IActionOptions = null;

const deleteContact = async ({ id }: TActionData<typeof options>) => {
  try {
    const data = await hubspotRequest(`/objects/contacts/${id}`, 'DELETE');
    return data;
  } catch (error) {
    console.error('Error delete contact:', error);
    throw error;
  }
};

export default {
  action: 'delete_contact',
  api_function: deleteContact,
  options,
} as TQorePartialActionWithFunction<typeof options>;
