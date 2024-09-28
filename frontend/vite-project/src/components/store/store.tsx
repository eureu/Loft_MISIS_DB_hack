import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
    page: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

const initialState: InitialStateType = {
    page: 0,
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<0 | 1 | 2 | 3 | 4 | 5 | 6>) => {
            state.page = action.payload;
        },
    },
});

const store = configureStore({
    reducer: {
        page: pageSlice.reducer, 
    },
});

export const { setPage } = pageSlice.actions;
export default store;