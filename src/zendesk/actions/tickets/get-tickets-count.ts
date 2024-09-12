import { ZENDESK_SWAGGER_API_PATH } from '../..';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'get_ticket_count',
  swagger_path: `${ZENDESK_SWAGGER_API_PATH}tickets/count/GET`,
  _localizationGroup: 'tickets',
} satisfies TQorePartialAction;
