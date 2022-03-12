import "./NotePage.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addStudent } from "../../features/currentStudentSlice";
import api from "../../api/api";

const NotePage = () => {
    //NOTE: Page is reliant on the URL Params... not current user
    const dispatch = useDispatch();
    const { noteId } = useParams();  
    const [note, setNote] = useState({});
    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const currentStudent = useSelector((state) => state.currentStudent.value);

    useEffect(() => {
        //Retrieve the note to display
        async function getNote(){
            const retrievedNote = await api.get(`note/${noteId}`);
            setNote(retrievedNote.data);
            setNoteTitle(retrievedNote.data.title);
            setNoteBody(retrievedNote.data.body);
        }
        getNote();

        //check if a user is logged in:
        if(Object.keys(currentStudent).length === 0){
            const isCurrentStudent = localStorage.getItem("ScribletCurrentStudent");
            if(isCurrentStudent){
                dispatch(addStudent(JSON.parse(isCurrentStudent)));
            }
        }
    }, []);

    const handleEdit = async () => {
        //Check if the note owner is the current user
        await api.put(`note/${noteId}`, {
            title: noteTitle,
            body: noteBody,
            subject_id: note.subject_id
        });
    }

    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value);
    }
    const handleBodyChange = (e) => {
        setNoteBody(e.target.value);
    }

    const renderOwnerView = () => {
        return(
            <div className="NotePage-Owner-container">
                <input onChange={(e) => handleTitleChange(e)} type="text" className="NotePage-title" value={noteTitle}></input>
                <textarea onChange={(e) => handleBodyChange(e)} className="NotePage-body" value={noteBody}></textarea>
                <button className="NotePage-Owner-submit" onClick={handleEdit}>edit</button>
            </div>
        );
    }

    const renderVisitorView = () => {
        return(
            <div className="NotePage-Visitor-container">
                <span className="NotePage-span">{noteTitle}</span>
                <textarea className="NotePage-readOnly" value={noteBody} readOnly />
            </div>
        )
    }
    return(
        <div className="NotePage-container">
            {
                currentStudent.id === note.student_id ?
                renderOwnerView()
                :
                renderVisitorView()
            }
            
        </div>
    )
}

export default NotePage