import { requestWrapper } from '@/shared/api';
import { actionWrapper } from '@/shared/lib';

export const sendKidData = actionWrapper(
  'child/sendData',
  async (childId: string) => {
    const response = await requestWrapper(
      {
        method: 'post',
        url: `/child/send/${childId}`,
      },
      error => error
    );

    return response;
  }
);
