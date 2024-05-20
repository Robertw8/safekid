import instance from './baseUrl';

const getUserInfo = async ({ jwtToken }: { jwtToken: string }, thunkApi) => {
  try {
    const response = await instance.get('parent/me', {
      headers: {
        Authorization: jwtToken,
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
