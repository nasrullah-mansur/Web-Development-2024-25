import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counters/counterSlice";

const store = configureStore({
    reducer: {
        counters: counterSlice,
    },
});

export default store;
