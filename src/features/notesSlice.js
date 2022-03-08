import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const loadStudentNotes = createAsyncThunk(
    'load/notes',
    async(id) => {
        const studentNotes = await api.get(`note/all/${id}`);
        return studentNotes.data;
    }
)

export const notesSlice = createSlice({
    name: "notesSlice",
    initialState: {value: []},
    reducers: {},
    extraReducers: {
        [loadStudentNotes.pending]: (state, action) => {},
        [loadStudentNotes.fulfilled]: (state, action) => {
            state.value = action.payload;
        },
        [loadStudentNotes.rejected]: (state, action) => {
            console.log("failed to load student notes");
        }
    }
});

export default notesSlice.reducer;