import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'add_project_members',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/projects/{project_gid}/addMembers/POST`,
  _localizationGroup: 'projects',
} satisfies TQorePartialAction;
