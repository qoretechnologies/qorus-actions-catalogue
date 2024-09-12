import { ZENDESK_SWAGGER_API_PATH } from '../..';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'delete_user',
  swagger_path: `${ZENDESK_SWAGGER_API_PATH}users/{id}/DELETE`,
  _localizationGroup: 'users',
} satisfies TQorePartialAction;
