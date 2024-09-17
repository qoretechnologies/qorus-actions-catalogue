import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'get_user_workspace_memberships',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/users/{user_id}/workspace_memberships/GET`,
  _localizationGroup: 'users',
} satisfies TQorePartialAction;
