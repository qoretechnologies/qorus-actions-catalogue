import { NOTION_SWAGGER_API_PATH } from '../../constants';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'filter_database',
  swagger_path: `${NOTION_SWAGGER_API_PATH}databases/{id}/query/POST`,
  _localizationGroup: 'databases',
} satisfies TQorePartialAction;
