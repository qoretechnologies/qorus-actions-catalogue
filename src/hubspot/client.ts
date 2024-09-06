import { QorusRequest } from '@qoretechnologies/ts-toolkit';
import { HUBSPOT_AUTH, HUBSPOT_DOMAIN } from './configs';

export const hubspotRequest = async (
  endpoint: string,
  method: string,
  body?: object,
  params?: Record<string, any>
) => {
  const uri = `/crm/v3${endpoint}`;
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
              Authorization: `Bearer ${HUBSPOT_AUTH}`,
            },
          },
          {
            url: `https://${HUBSPOT_DOMAIN}`,
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
              Authorization: `Bearer ${HUBSPOT_AUTH}`,
            },
          },
          {
            url: `https://${HUBSPOT_DOMAIN}`,
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
              Authorization: `Bearer ${HUBSPOT_AUTH}`,
            },
          },
          {
            url: `https://${HUBSPOT_DOMAIN}`,
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
              Authorization: `Bearer ${HUBSPOT_AUTH}`,
            },
          },
          {
            url: `https://${HUBSPOT_DOMAIN}`,
            endpointId: '5',
          }
        );
        break;
    }
    return response?.data || {};
  } catch (error) {
    console.error('Error with HubSpot request:', error);
    throw error;
  }
};
