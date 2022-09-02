import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    start: 0,
    end: 4,
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.start = action.payload.startIndex;
            state.end = action.payload.endIndex;
        },
    },
});

export default paginationSlice.reducer;
export const { increment } = paginationSlice.actions;
