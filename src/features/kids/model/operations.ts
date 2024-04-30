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

// import RegisterChildParams from '../types/registerChild';

// const registerKid = actionWrapper(
//   'child/register',
//   async (params: RegisterChildParams) => {
//     const { parentId, mobileTitle, deviceId } = params;
//     const response = await requestWrapper(
//       {
//         method: 'post',
//         url: `/child/registration`,
//         data: { parentId, mobileTitle, deviceId },
//       },
//       error => error
//     );

//     return response;
//   }
// );

//! це прибрати, для фічі з нотифікашками буде окремий слайс
const sendKidData = actionWrapper('child/sendData', async (childId: string) => {
  const response = await requestWrapper(
    {
      method: 'post',
      url: `/child/send/${childId}`,
    },
    error => error
  );

  return response;
});

export { sendKidData };
