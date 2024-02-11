import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_KEY, REFRESH_KEY } from '../../../../shared/const/localStorage';
import { userActions } from '../../../../entities/User/model/slice/userSlice';
import { User } from '../../../../entities/User/model/type/UserSchema';
import { $api } from '../../../../shared/api/api';

interface LoginByUsernameProps {
    username: string;
    password: string;
}
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await $api.post<User>('/auth/login', authData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(ACCESS_KEY, response.data.access_token);
            localStorage.setItem(REFRESH_KEY, response.data.refresh_token);
            thunkAPI.dispatch(userActions.setUser(response.data));
            return response.data;
        } catch (e) {
            console.log('error');
            return thunkAPI.rejectWithValue('Вы ввели неправильный логин или пароль');
        }
    },
);
