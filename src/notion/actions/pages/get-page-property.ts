import { NOTION_SWAGGER_API_PATH } from '../../constants';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'get_page_property',
  swagger_path: `${NOTION_SWAGGER_API_PATH}pages/{page_id}/properties/{property_id}/GET`,
  _localizationGroup: 'pages',
} satisfies TQorePartialAction;
