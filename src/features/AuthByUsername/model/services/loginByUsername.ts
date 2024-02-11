import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ACCESS_KEY } from '../../../../shared/const/localStorage';
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
            localStorage.setItem(ACCESS_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setUser(response.data));
            return response.data;
        } catch (e) {
            console.log('error');
            return thunkAPI.rejectWithValue('Вы ввели неправильный логин или пароль');
        }
    },
);
