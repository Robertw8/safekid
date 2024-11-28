import { requestWrapper } from '@/shared/api';
import { actionWrapper } from '@/shared/lib';

//без токена

// export const getListKids = actionWrapper('child/list', async () => {
//   const response = await requestWrapper(
//     {
//       method: 'get',
//       url: '/parent/my-children',
//     },
//     error => (typeof error.message === 'string' ? error.message : 'error')
//   );

//   return response;
// });

//С Токеном

// export const getListKids = actionWrapper(
//   'child/list',
//   async (token: string) => {
//     const response = await requestWrapper(
//       {
//         method: 'get',
//         url: '/parent/my-children',
//         config: {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       },
//       error => (typeof error.message === 'string' ? error.message : 'error')
//     );
//     return response;
//   }
// );

export const getListKids = actionWrapper(
  'child/list',
  async (_, { getState }) => {
    const token = getState().auth.token; // +токен стейт
    if (!token) {
      throw new Error('No authentication token available');
    }
    const response = await requestWrapper(
      {
        method: 'get',
        url: '/parent/my-children',
        config: {
          headers: {
            Authorization: token,
          },
        },
      },
      error => (typeof error.message === 'string' ? error.message : 'error')
    );
    return response;
  }
);
