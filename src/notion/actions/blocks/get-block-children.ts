import { NOTION_SWAGGER_API_PATH } from '../../constants';
import { TQorePartialAction } from '../../../global/models/qore';

export default {
  action: 'get_block_children',
  swagger_path: `${NOTION_SWAGGER_API_PATH}blocks/{id}/children/GET`,
  _localizationGroup: 'blocks',
} satisfies TQorePartialAction;
