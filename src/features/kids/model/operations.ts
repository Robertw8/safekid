// https://drake-singular-severely.ngrok-free.app

// POST - /child/send/{ childId }
// "childId": "string"

// POST - /child/registration
// {
//   "parentId": "string",
//   "mobileTitle": "string",
//   "deviceId": "string"
// }

import { requestWrapper } from '@/shared/api';
import { actionWrapper } from '@/shared/lib';

import RegisterChildParams from '../types/registerChild';

const baseURL = 'https://drake-singular-severely.ngrok-free.app';

export const registerKid = actionWrapper(
  'child/register',
  async (params: RegisterChildParams) => {
    const { parentId, mobileTitle, deviceId } = params;
    const response = await requestWrapper(
      {
        method: 'post',
        url: `${baseURL}/child/registration`,
        data: { parentId, mobileTitle, deviceId },
      },
      error => error
    );

    return response;
  }
);

export const sendKidData = actionWrapper(
  'child/sendData',
  async (childId: string) => {
    const response = await requestWrapper(
      {
        method: 'post',
        url: `${baseURL}/child/send/${childId}`,
      },
      error => error
    );

    return response;
  }
);
