import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const loadStudentSubjects = createAsyncThunk(
    'load/subjects',
    async(id)=> {
        const studentSubjects = await api.get(
            `subject/all/${id}`
        )
        return studentSubjects.data
    }
)

export const subjectsSlice = createSlice({
    name: "subjectsSlice",
    initialState: {value: []},
    reducers: {},
    extraReducers: {
        [loadStudentSubjects.pending]: () => {
            console.log('Loading student subjects...')
        },
        [loadStudentSubjects.fulfilled]: (state, action) => {
            state.value = action.payload
        },
        [loadStudentSubjects.rejected]: () => {
            console.log('Failed to load student subjects...')
        }
    }
});

export default subjectsSlice.reducer;