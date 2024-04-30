import { createAsyncThunk } from '@reduxjs/toolkit';

const actionWrapper = <Returned, ThunkArg>(
  name: string,
  handler: (args: ThunkArg, thunkAPI) => Promise<Returned>
) => {
  return createAsyncThunk<Returned, ThunkArg>(name, async (args, thunkAPI) => {
    try {
      return await handler(args, thunkAPI);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  });
};

export default actionWrapper;
