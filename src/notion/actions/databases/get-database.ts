import { NOTION_SWAGGER_API_PATH } from '../../constants';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'get_database',
  swagger_path: `${NOTION_SWAGGER_API_PATH}databases/{id}/GET`,
  _localizationGroup: 'databases',
} satisfies TQorePartialAction;
