import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'create_goal',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/goals/POST`,
  _localizationGroup: 'goals',
} satisfies TQorePartialAction;
