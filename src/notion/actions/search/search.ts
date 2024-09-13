import { NOTION_SWAGGER_API_PATH } from '../../constants';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'search',
  swagger_path: `${NOTION_SWAGGER_API_PATH}search/POST`,
  _localizationGroup: 'search',
} satisfies TQorePartialAction;
