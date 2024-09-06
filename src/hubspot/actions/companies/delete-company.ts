import { TQorePartialActionWithFunction } from 'global/models/qore';
import { hubspotRequest } from '../../client';
import { IActionOptions, TActionData } from 'global/models/actions';

// Defining a function to delete company
const options: IActionOptions = null;

const deleteCompany = async ({ id }: TActionData<typeof options>) => {
  try {
    const data = await hubspotRequest(`/objects/companies/${id}`, 'DELETE');
    return data;
  } catch (error) {
    console.error('Error delete company:', error);
    throw error;
  }
};

export default {
  action: 'delete_company',
  api_function: deleteCompany,
  options,
} as TQorePartialActionWithFunction<typeof options>;
