import instance from './baseUrl';

const delParentAccount = async (_, thunkApi) => {
    try {
        console.log('use delParentAccount', );
        const response = await instance.delete('parent/delete');
        return response.data;
    } catch (error) {
        alert(
            `Oops! Something was wrong...`,
        );
        return thunkApi.rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
};

export default delParentAccount;