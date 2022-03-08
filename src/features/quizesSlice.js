import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const loadStudentQuizes = createAsyncThunk(
    'load/quizes',
    async(id)=> {
        const studentQuizes = await api.get(`quiz/all/${id}`);
        return studentQuizes.data
    }
)

export const quizesSlice = createSlice({
    name: "quizesSlice",
    initialState: {value: []},
    reducers: {},
    extraReducers: {
        [loadStudentQuizes.pending]: () => {},
        [loadStudentQuizes.fulfilled]: (state, action) => {
            state.value = action.payload
        },
        [loadStudentQuizes.rejected]: () => {
            console.log('REjected loadStudentQuizes')
        }
    }
});

export default quizesSlice.reducer