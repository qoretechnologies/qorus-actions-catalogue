import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'get_attachment',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/attachments/{attachment_gid}/GET`,
  _localizationGroup: 'attachments',
} satisfies TQorePartialAction;
