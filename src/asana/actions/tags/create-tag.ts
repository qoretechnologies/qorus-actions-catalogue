import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'create_tag',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/tags/POST`,
  _localizationGroup: 'tags',
} satisfies TQorePartialAction;
