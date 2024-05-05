import instance from './baseUrl';

const postVerifyEmail = async (verifyData, thunkApi) => {
  const { email, code } = verifyData;
  console.log('verifyData in postVerifyEmail', verifyData);
  try {
    const response = await instance.post(`users/verifyEmail/${email}/${code}`);
    return response.data;
  } catch (error) {
    alert(`Oops! Something was wrong...`);
    return thunkApi.rejectWithValue(
      error instanceof Error ? error.message : 'An error occurred'
    );
  }
};

export default postVerifyEmail;
