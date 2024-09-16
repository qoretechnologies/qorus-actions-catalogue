import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'update_workspace',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/workspaces/{workspace_gid}/PUT`,
  _localizationGroup: 'workspaces',
} satisfies TQorePartialAction;
