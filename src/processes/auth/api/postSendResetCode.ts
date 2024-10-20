import instance from './baseUrl';

const postSendResetCode = async (email, thunkApi) => {
  try {
    const response = await instance.post(`/users/reset-password/${email}`);
    return response.data;
  } catch (error) {
    alert(`Помилка при надсиланні коду. Спробуйте ще раз.`);
    return thunkApi.rejectWithValue(
      error instanceof Error ? error.message : 'An error occurred'
    );
  }
};

export default postSendResetCode;
