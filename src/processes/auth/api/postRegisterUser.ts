import instance from './baseUrl';

const postRegisterUser = async (dataUser, thunkApi) => {
    try {
        const response = await instance.post('users/registration', dataUser);
        return response.data;
    } catch (error) {
        alert(
            `Oops! Something was wrong...`,
        );
        return thunkApi.rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
};

export default postRegisterUser;