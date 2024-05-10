import instance from './baseUrl';

const postRegisterUser = async (dataUser, thunkApi) => {
  try {
    const { data } = await instance.post('users/registration', dataUser);
    alert(data.message);
    return data;
  } catch (error) {
    alert(`Сталась помилка, спробуйте ще раз`);
    return thunkApi.rejectWithValue(
      error instanceof Error ? error.message : 'An error occurred'
    );
  }
};

export default postRegisterUser;
