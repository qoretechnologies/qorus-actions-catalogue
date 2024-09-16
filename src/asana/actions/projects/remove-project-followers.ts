import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'remove_project_followers',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/projects/{project_gid}/removeFollowers/POST`,
  _localizationGroup: 'projects',
} satisfies TQorePartialAction;
