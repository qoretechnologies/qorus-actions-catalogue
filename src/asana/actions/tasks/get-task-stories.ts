import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'get_task_stories',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/tasks/{task_gid}/stories/GET`,
  _localizationGroup: 'tasks',
} satisfies TQorePartialAction;
