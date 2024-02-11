import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../../../shared/api/api';

export const anomalyService = createAsyncThunk(
    'anomaly/get',
    async (_, thunkAPI) => {
        try {
            const response = await $api.get('/get_data');

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log('error');
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);
