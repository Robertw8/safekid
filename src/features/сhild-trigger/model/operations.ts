import instance from '../../../processes/auth/api/baseUrl';
const sendSpeechDataToServer = async (childId:any, thunkApi:any) => {
    try {
        const response = await instance.post(`/child/speech/${childId}`,);
        alert(`${response.data}`);
        return;
    } catch (error) {
        alert(
            `Oops! Something was wrong...`,
        );
        return thunkApi.rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
};

export default sendSpeechDataToServer;