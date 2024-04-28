import instance from './baseUrl';

const postLoginUser = async (dataUser, thunkApi) => {
    try {
        console.log('dataUser in postLoginUser', dataUser);
        const response = await instance.post('users/login', dataUser);
        return response.data;
    } catch (error) {
        alert(
            `Oops! Something was wrong...`,
        );
        return thunkApi.rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
};

export default postLoginUser;