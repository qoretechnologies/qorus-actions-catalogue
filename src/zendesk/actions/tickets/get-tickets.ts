import { IActionOptions, IActionResponse } from 'global/models/actions';
import { TQorePartialActionWithFunction } from 'global/models/qore';

export default {
  action: 'get_tickets',
  swagger_path: '/api/v2/tickets/GET',
} as TQorePartialActionWithFunction<IActionOptions, IActionResponse>;
