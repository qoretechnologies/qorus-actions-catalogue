import { NOTION_SWAGGER_API_PATH } from '../../constants';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'create_comment',
  swagger_path: `${NOTION_SWAGGER_API_PATH}comments/POST`,
  _localizationGroup: 'comments',
} satisfies TQorePartialAction;
