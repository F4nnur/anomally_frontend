import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../../../shared/api/api';

interface RegistrationWithUsernameProps {
    username: string;
    password: string;
}
export const registrationWithUsername = createAsyncThunk(
    'registration/registrationWithUsername',
    async (registrationData: RegistrationWithUsernameProps, thunkAPI) => {
        try {
            const response = await $api.post('/auth/registration', registrationData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

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
