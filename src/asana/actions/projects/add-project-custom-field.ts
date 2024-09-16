import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'add_project_custom_field',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/projects/{project_gid}/addCustomFieldSetting/POST`,
  _localizationGroup: 'projects',
} satisfies TQorePartialAction;
