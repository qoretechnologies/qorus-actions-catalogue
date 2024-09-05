import { QorusRequest } from '@qoretechnologies/ts-toolkit';
import { TQoreAppActionFunctionContext } from 'global/models/qore';

const BasicAuth = Buffer.from(
  `${process.env.ZENDESK_EMAIL}/token:${process.env.ZENDESK_API_TOKEN}`
).toString('base64');

export const zendeskRequest = async (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: object,
  params?: Record<string, any>,
  options?: TQoreAppActionFunctionContext
) => {
  const uri = `/api/v2${endpoint}`;
  const authorization =
    process.env.NODE_ENV === 'test' ? `Basic ${BasicAuth}` : `Bearer ${options.conn_opts.token}`;

  const requestMethod =
    method === 'DELETE' ? 'deleteReq' : (method.toLowerCase() as 'get' | 'post' | 'put');

  try {
    const response: Record<string, any> = await QorusRequest[requestMethod](
      {
        path: uri,
        ...(body && { data: body }),
        ...(params && { params }),
        headers: {
          Authorization: authorization,
        },
      },
      {
        // TODO: Use variable domain from options
        url: `https://${process.env.ZENDESK_TEST_DOMAIN}`,
        endpointId: 'zendesk',
      }
    );

    return response?.data || {};
  } catch (error) {
    console.error('Error with Zendesk request:', error);
    throw error;
  }
};
