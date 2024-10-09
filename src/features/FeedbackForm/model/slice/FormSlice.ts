import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormSchema } from '../types/FormSchema';

const initialState: FormSchema = {
    form: undefined,
    validateErrors: [],
};

export const FormSlice = createSlice({
    name: 'Form',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder.addCase(AsyncThunk.pending, (state) => {
    //         state.error = undefined;
    //         state.isLoading = true;
    //     });
    //     builder.addCase(AsyncThunk.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //     });
    //     builder.addCase(AsyncThunk.rejected, (state, action) => {
    //         state.error = action.payload;
    //         state.isLoading = false;
    //     });
    // },
});

export const { actions: FormActions } = FormSlice;
export const { reducer: FormReducer } = FormSlice;
