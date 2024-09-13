import { NOTION_SWAGGER_API_PATH } from '../../constants';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'update_database',
  swagger_path: `${NOTION_SWAGGER_API_PATH}databases/{id}/PATCH`,
  _localizationGroup: 'databases',
} satisfies TQorePartialAction;
