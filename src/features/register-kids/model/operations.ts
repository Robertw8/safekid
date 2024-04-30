import RegisterChildParams from '../types/registerChild';
import { requestWrapper } from '@/shared/api';
import { actionWrapper } from '@/shared/lib';

export const registerKid = actionWrapper(
  'child/register',
  async (params: RegisterChildParams) => {
    const { parentId, mobileTitle, deviceId } = params;
    const response = await requestWrapper(
      {
        method: 'post',
        url: `/child/registration`,
        data: { parentId, mobileTitle, deviceId },
      },
      error => error
    );

    return response;
  }
);
