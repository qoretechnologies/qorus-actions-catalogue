import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'remove_portfolio_custom_field',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/portfolios/{portfolio_gid}/removeCustomFieldSetting/POST`,
  _localizationGroup: 'portfolios',
} satisfies TQorePartialAction;
