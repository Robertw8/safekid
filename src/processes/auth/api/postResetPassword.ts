import instance from './baseUrl';

const postResetPassword = async (verifyData, thunkApi) => {
  const { email, code } = verifyData;
  try {
    console.log('verifyData in postResetPassword', verifyData);
    const response = await instance.post(
      `users/reset-password/${email}/${code}`,
      verifyData
    );
    return response.data;
  } catch (error: { message: string } | any) {
    alert(`Oops! Something went wrong...${error?.message}`);
    return thunkApi.rejectWithValue(
      error instanceof Error ? error.message : 'An error occurred'
    );
  }
};

export default postResetPassword;
