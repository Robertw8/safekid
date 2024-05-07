import instance from './baseUrl';

const postResendVerifyCode = async (email, thunkApi) => {
    try {
        const response = await instance.post(`users/refreshToken/${email}`,);
        alert(`${response.data}`);
        return;
    } catch (error) {
        alert(
            `Oops! Something was wrong...`,
        );
        return thunkApi.rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
};

export default postResendVerifyCode;