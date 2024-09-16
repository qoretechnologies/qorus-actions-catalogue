import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'get_user_favorites',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/users/{user_gid}/favorites/GET`,
  _localizationGroup: 'users',
} satisfies TQorePartialAction;
