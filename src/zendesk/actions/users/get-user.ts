import { ZENDESK_SWAGGER_API_PATH } from '../..';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'get_user',
  swagger_path: `${ZENDESK_SWAGGER_API_PATH}users/{user_id}/GET`,
  _localizationGroup: 'users',
} satisfies TQorePartialAction;
