import { NOTION_SWAGGER_API_PATH } from '../../constants';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'get_comments',
  swagger_path: `${NOTION_SWAGGER_API_PATH}comments/GET`,
  _localizationGroup: 'comments',
} satisfies TQorePartialAction;
