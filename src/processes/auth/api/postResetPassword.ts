import instance from './baseUrl';

const postResetPassword = async (email, thunkApi) => {
  try {
    const response = await instance.post(`/users/reset-password/${email}`);
    if (response.status === 200) {
      const data = response.data;
      alert(`${data}`);
      return data;
    } else {
      throw new Error('Request failed with status: ' + response.status);
    }
  } catch (error) {
    alert(`Oops! Something was wrong...`);
    return thunkApi.rejectWithValue(
      error instanceof Error ? error.message : 'An error occurred'
    );
  }
};

export default postResetPassword;


