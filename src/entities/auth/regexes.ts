export const passwordRegex: RegExp =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/]).{8,32}$/;
export const emailRegex: RegExp =
  /^(?=.{3,32}$)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
