import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registrationWithUsername } from '../services/registrationWithUsername';
import { RegistrationSchema } from '../type/RegistrationSchema';

const initialState: RegistrationSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

export const loginSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registrationWithUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registrationWithUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(registrationWithUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});
// Action creators are generated for each case reducer function
export const { actions: registrationActions } = loginSlice;
export const { reducer: registrationReducer } = loginSlice;
