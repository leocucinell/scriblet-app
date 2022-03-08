import { configureStore } from "@reduxjs/toolkit";

import currentStudentSlice from "../features/currentStudentSlice";
import subjectsSlice from "../features/subjectsSlice";
import quizesSlice from "../features/quizesSlice";
import notesSlice from '../features/notesSlice';

const store = configureStore({
    reducer: {
        "currentStudent": currentStudentSlice,
        "studentSubjects": subjectsSlice,
        "studentQuizes": quizesSlice,
        "studentNotes": notesSlice
    }
});

export default store;