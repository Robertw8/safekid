// export { default as getDeviceToken } from './api/getDeviceToken';
export { default as instance } from './api/baseUrl';
export { default as postRegisterUser } from './api/postRegisterUser';
export { default as postVerifyEmail } from './api/postVerifyEmail';
export { default as postResendVerifyCode } from './api/postResendVerifyCode';
export { default as postLoginUser } from './api/postLoginUser';
export { default as delParentAccount } from './api/delParentAccount';

export { default as authReducer } from './model/slice';
export { selectRole } from './model/selectors';
export { setUserRole } from './model/operations';
