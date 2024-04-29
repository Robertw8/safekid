import DeleteKidParams from '../types/deleteChild';
import { requestWrapper } from '@/shared/api';
import { actionWrapper } from '@/shared/lib';

const baseURL = 'https://drake-singular-severely.ngrok-free.app';

export const deleteKid = actionWrapper(
  'child/delete',
  async (params: DeleteKidParams) => {
    const { childId, token } = params;
    const response = await requestWrapper(
      {
        method: 'delete',
        url: `${baseURL}/parent/remove-child/${childId}`,
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
