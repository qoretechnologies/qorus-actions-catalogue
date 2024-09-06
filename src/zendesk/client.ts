import { QorusRequest } from '@qoretechnologies/ts-toolkit';
import { ZENDESK_AUTH, ZENDESK_DOMAIN } from './configs';

export const zendeskRequest = async (
  endpoint: string,
  method: string,
  body?: object,
  params?: Record<string, any>
) => {
  const uri = `/api/v2${endpoint}`;
  let response: Record<string, any> | undefined;
  try {
    switch (method) {
      case 'GET':
        response = await QorusRequest.get(
          {
            path: uri,
            ...(body && { data: body }),
            ...(params && { params }),
            headers: {
              Authorization: `Basic ${ZENDESK_AUTH}`,
            },
          },
          {
            url: `https://${ZENDESK_DOMAIN}`,
            endpointId: '5',
          }
        );
        break;
      case 'DELETE':
        response = await QorusRequest.get(
          {
            path: uri,
            ...(body && { data: body }),
            headers: {
              Authorization: `Basic ${ZENDESK_AUTH}`,
            },
          },
          {
            url: `https://${ZENDESK_DOMAIN}`,
            endpointId: '5',
          }
        );
        break;
      case 'PUT':
        response = await QorusRequest.put(
          {
            path: uri,
            ...(body && { data: body }),
            headers: {
              Authorization: `Basic ${ZENDESK_AUTH}`,
            },
          },
          {
            url: `https://${ZENDESK_DOMAIN}`,
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
            url: `https://${ZENDESK_DOMAIN}`,
            endpointId: '5',
          }
        );
        break;
    }
    return response?.data || {};
  } catch (error) {
    console.error('Error with Zendesk request:', error);
    throw error;
  }
};
