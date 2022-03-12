import "./CreateNotePage.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent } from "../../features/currentStudentSlice";
import { useNavigate } from "react-router";

import api from "../../api/api";
import { loadStudentSubjects } from "../../features/subjectsSlice";

const CreateNotePage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const currentStudent = useSelector((state) => state.currentStudent.value);
    const subjects = useSelector((state) => state.studentSubjects.value);

    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const [selectedSubject, setSelectedSubject] = useState();

    useEffect(() => {
        //Upon first render, check if the subjects have been loaded
        //add the first subject as the first item in the selector list
        if(subjects.length > 0){
            setSelectedSubject(subjects[0].id)
        }
    },[subjects])

    useEffect(() => {
        if(Object.keys(currentStudent).length === 0){
            const isCurrentStudent = localStorage.getItem("ScribletCurrentStudent");
            if(isCurrentStudent){
                dispatch(addStudent(JSON.parse(isCurrentStudent)));
            } else {
                //Navigates a user back to landing if no user is saved in 
                //local storage or Redux state
                navigate('/');
            }
        } else {
            dispatch(loadStudentSubjects(currentStudent.id));
        }
    }, [currentStudent])

    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value);
    }

    const handleBodyChange = (e) => {
        setNoteBody(e.target.value);
    }

    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value)
    }

    const handleSubmit = async () => {
        const createdNote = await api.post('note/add', {
            title: noteTitle,
            body: noteBody,
            student_id: currentStudent.id,
            subject_id: parseInt(selectedSubject)
        });
        console.log(createdNote);
    }

    return(
        <div className="CreateNotePage-container">
            <div className="CreateNotePage-top-banner">
                <input placeholder="Note title..." onChange={(e) => handleTitleChange(e)} type="text" className="CreateNotePage-title" value={noteTitle}></input>
                <div className="CreateNotePage-subjects-container">
                    <label className="CreateNotePage-subject-label" htmlFor="CreateNotePage-id-subject" >Subject:</label>
                    <select id="CreateNotePage-id-subject" value={selectedSubject} onChange={handleSubjectChange}>
                        {
                            subjects.map((subject) => {
                                return(<option key={subject.id} value={subject.id}>{subject.title}</option>)
                            })
                        }
                    </select>
                </div>
            </div>
            <textarea placeholder="body" onChange={(e) => handleBodyChange(e)} className="CreateNotePage-body" value={noteBody}></textarea>
            <button className="NotePage-Owner-submit" onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default CreateNotePage;