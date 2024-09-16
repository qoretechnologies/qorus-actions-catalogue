import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'create_task_story',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/tasks/{task_gid}/stories/POST`,
  _localizationGroup: 'tasks',
} satisfies TQorePartialAction;
