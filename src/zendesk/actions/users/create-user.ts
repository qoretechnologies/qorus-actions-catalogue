import { ZENDESK_SWAGGER_API_PATH } from '../..';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'create_user',
  swagger_path: `${ZENDESK_SWAGGER_API_PATH}users/POST`,
  _localizationGroup: 'users',
} satisfies TQorePartialAction;
