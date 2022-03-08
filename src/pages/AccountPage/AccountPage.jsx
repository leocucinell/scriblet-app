import "./AccountPage.css"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { addStudent } from "../../features/currentStudentSlice";
import { loadStudentSubjects } from "../../features/subjectsSlice";
import { loadStudentQuizes } from "../../features/quizesSlice";
import { loadStudentNotes } from "../../features/notesSlice";

import ItemSelector from "./ItemSelector/ItemSelector";


const AccountPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentStudent = useSelector((state) => state.currentStudent.value);

    useEffect(() => {
        if(Object.keys(currentStudent).length === 0){
            //currentStudent is not saved in redu, do that then re-run useEffect
            const isCurrentStudent = localStorage.getItem("ScribletCurrentStudent");
            if(isCurrentStudent){
                dispatch(addStudent(JSON.parse(isCurrentStudent)));
            } else {
                navigate('/');
            }
        } else {
            //current Student is saved in redux, load the quizes/subjects/notes
            dispatch(loadStudentSubjects(currentStudent.id));
            dispatch(loadStudentQuizes(currentStudent.id));
            dispatch(loadStudentNotes(currentStudent.id));
        }
    }, [currentStudent]);

    return(
        <div className="AccountPage-container">
            <span>{currentStudent ? currentStudent.email : null}</span>
            <div className="AccountPage-item-selector">
                <ItemSelector />
            </div>
        </div>
    )
}

export default AccountPage;