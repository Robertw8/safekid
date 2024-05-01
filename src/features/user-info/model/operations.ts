import { requestWrapper } from '@/shared/api';
import { actionWrapper } from '@/shared/lib';
import ParentInfoParams from '../types/parentInfo';

export const parentInfo = actionWrapper(
  'parent/info',
  async (params: ParentInfoParams) => {
    const { token } = params;
    const response = await requestWrapper(
      {
        method: 'get',
        url: `/parent/me`,
        config: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      },
      error => error
    );
    return response;
  }
);
