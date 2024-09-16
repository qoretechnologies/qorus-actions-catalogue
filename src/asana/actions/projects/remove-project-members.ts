import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'remove_project_members',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/projects/{project_gid}/removeMembers/POST`,
  _localizationGroup: 'projects',
} satisfies TQorePartialAction;
