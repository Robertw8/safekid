import instance from './baseUrl';
import { token } from './postLoginUser';

const delParentAccount = async (_, thunkApi) => {
    try {
        const response = await instance.delete('parent/delete');
        alert(`${response.data}`)
        token.clear();
        return;
    } catch (error) {
        alert(
            `Oops! Something was wrong...`,
        );
        return thunkApi.rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
};

export default delParentAccount;