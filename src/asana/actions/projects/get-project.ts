import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'get_project',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/projects/{project_gid}/GET`,
  _localizationGroup: 'projects',
} satisfies TQorePartialAction;
