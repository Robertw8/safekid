import instance from './baseUrl';
export const token = {
  set: token => {
    instance.defaults.headers['Authorization'] = token;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  },
};

const postResetPassword = async (dataUser, thunkApi) => {
  try {
    console.log('dataUser in postResetPassword', dataUser);
    const response = await instance.post('users/resetPassword', dataUser);
    token.set(response.data);
    return response.data;
  } catch (error: { message: string } | any) {
    alert(`Oops! Something was wrong...${error?.message}`);
    return thunkApi.rejectWithValue(
      error instanceof Error ? error.message : 'An error occurred'
    );
  }
};

export default postResetPassword;
