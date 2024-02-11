import { createSlice } from '@reduxjs/toolkit';
import { AnomalySchema } from '../type/AnomalySchema';
import { anomalyService } from '../services/anomalyService';

const initialState: AnomalySchema = {
    data: undefined,
    isLoading: false,
    error: undefined,

};

export const userSlice = createSlice({
    name: 'anomaly',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(anomalyService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(anomalyService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(anomalyService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: anomalyActions } = userSlice;
export const { reducer: anomalyReducer } = userSlice;
