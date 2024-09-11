import { TQorePartialActionWithFunction } from 'global/models/qore';
import { IActionOptions, IActionResponse } from 'global/models/actions';

export default {
  action: 'get_ticket',
  swagger_path: '/api/v2/tickets/{id}/GET',
} as TQorePartialActionWithFunction<IActionOptions, IActionResponse>;
