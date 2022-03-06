import { createSlice } from '@reduxjs/toolkit';

export const currentStudentSlice = createSlice({
    name: "currentStudent",
    initialState: {value: {}},
    reducers: {
        addStudent: (state, action) => {
            state.value = action.payload
        },
        removeStudent: (state, action) => {
            state.value = {}
        }
    }
});

export const { addStudent, removeStudent } = currentStudentSlice.actions;
export  default currentStudentSlice.reducer;