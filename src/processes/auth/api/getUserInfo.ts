import instance from './baseUrl';

const getUserInfo = async (_, thunkApi) => {
    try {
        const response = await instance.get('parent/me');
        return response.data;
    } catch (error) {
        alert(
            `Oops! Something was wrong...`,
        );
        return thunkApi.rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
};

export default getUserInfo;