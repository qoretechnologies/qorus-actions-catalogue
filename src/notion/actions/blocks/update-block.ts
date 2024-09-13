import { NOTION_SWAGGER_API_PATH } from '../../constants';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'update_block',
  swagger_path: `${NOTION_SWAGGER_API_PATH}blocks/{id}/PATCH`,
  _localizationGroup: 'blocks',
} satisfies TQorePartialAction;
