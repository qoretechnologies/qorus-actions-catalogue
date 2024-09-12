import { ZENDESK_SWAGGER_API_PATH } from '../..';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'get_organizations',
  swagger_path: `${ZENDESK_SWAGGER_API_PATH}organizations/GET`,
  _localizationGroup: 'organizations',
} satisfies TQorePartialAction;
