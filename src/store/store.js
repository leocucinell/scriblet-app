import { configureStore } from "@reduxjs/toolkit";

import currentStudentSlice from "../features/currentStudentSlice";

const store = configureStore({
    reducer: {
        "currentStudent": currentStudentSlice
    }
});

export default store;