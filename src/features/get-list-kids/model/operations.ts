import { requestWrapper } from '@/shared/api';
import { actionWrapper } from '@/shared/lib';

export const getListKids = actionWrapper(
  'child/list',
  async (token: string) => {
    const response = await requestWrapper(
      {
        method: 'get',
        url: '/parent/my-children',
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
