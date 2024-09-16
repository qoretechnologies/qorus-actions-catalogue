import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'get_project_tasks',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/projects/{project_gid}/tasks/GET`,
  _localizationGroup: 'projects',
} satisfies TQorePartialAction;
