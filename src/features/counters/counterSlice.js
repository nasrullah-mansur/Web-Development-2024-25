import { createSlice } from "@reduxjs/toolkit";

const initialCounters = [
    {
        id: 1,
        value: 5,
    },
    {
        id: 2,
        value: 0,
    },
    {
        id: 3,
        value: 10,
    },
];

const countersSlice = createSlice({
    name: "counters",
    initialState: initialCounters,
    reducers: {
        increment: (state, action) => {
            const countIndex = state.findIndex(
                (item) => item.id == action.payload
            );
            // state[countIndex].value = state[countIndex].value + 1
            state[countIndex].value++;
        },
        decrement: (state, action) => {
            const countIndex = state.findIndex(
                (item) => item.id == action.payload
            );
            // state[countIndex].value = state[countIndex].value - 1
            state[countIndex].value--;
        },
    },
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
