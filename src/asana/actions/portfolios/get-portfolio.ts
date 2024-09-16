import { TQorePartialAction } from '../../../global/models/qore';
import { ASANA_SWAGGER_API_PATH } from '../../constants';

export default {
  action: 'get_portfolio',
  swagger_path: `${ASANA_SWAGGER_API_PATH}/portfolios/{portfolio_gid}/GET`,
  _localizationGroup: 'portfolios',
} satisfies TQorePartialAction;
