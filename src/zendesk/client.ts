import { QorusRequest } from '@qoretechnologies/ts-toolkit';
import { ZENDESK_AUTH } from './configs';

export const zendeskRequest = async (endpoint: string, method: string, body?: object) => {
  const uri = `/api/v2${endpoint}`;
  let response: Record<string, any> | undefined;
  console.log(endpoint, method, body)
  try {
    switch (method) {
      case 'GET':
        response = await QorusRequest.get(
          {
            path: uri,
            ...(body && { data: body }),
            headers: {
              Authorization: `Basic ${ZENDESK_AUTH}`,
            },
          },
          {
            url: 'https://qorehelp.zendesk.com',
            endpointId: '5',
          }
        );
        break;

      case 'DELETE':
        response = await QorusRequest.deleteReq(
          {
            path: uri,
            ...(body && { data: body }),
            headers: {
              Authorization: `Basic ${ZENDESK_AUTH}`,
            },
          },
          {
            url: 'https://qorehelp.zendesk.com',
            endpointId: '5',
          }
        );
        break;
      case 'POST':
      default:
        response = await QorusRequest.post(
          {
            path: uri,
            ...(body && { data: body }),
            headers: {
              Authorization: `Basic ${ZENDESK_AUTH}`,
            },
          },
          {
            url: 'https://qorehelp.zendesk.com',
            endpointId: '5',
          }
        );
        break;
    }
    return response.data;
  } catch (error) {
    console.error('Error with Zendesk request:', error);
    throw error;
  }
};
