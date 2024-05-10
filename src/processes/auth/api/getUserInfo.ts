import instance from './baseUrl';

const getUserInfo = async ({ token }: { token: string }, thunkApi) => {
  try {
    const response = await instance.get('parent/me', {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    alert(`Помилка аутентифікації`);
    return thunkApi.rejectWithValue(
      error instanceof Error ? error.message : 'An error occurred'
    );
  }
};

export default getUserInfo;
