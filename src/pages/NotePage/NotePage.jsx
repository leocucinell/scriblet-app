import "./NotePage.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

import api from "../../api/api";

const NotePage = () => {
    //NOTE: Page is reliant on the URL Params... not current user
    const { noteId } = useParams();  
    const [note, setNote] = useState({});
    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");

    useEffect(() => {
        async function getNote(){
            const retrievedNote = await api.get(`note/${noteId}`);
            setNote(retrievedNote.data);
            setNoteTitle(retrievedNote.data.title);
            setNoteBody(retrievedNote.data.body);
        }
        getNote()
    }, []);

    const handleEdit = async () => {
        //Check if the note owner is the current user
        const editedNote = await api.put(`note/${noteId}`, {
            title: noteTitle,
            body: noteBody,
            subject_id: note.subject_id
        });
        console.log(editedNote);
    }

    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value);
    }
    const handleBodyChange = (e) => {
        setNoteBody(e.target.value);
    }
    return(
        <div className="NotePage-container">
            <input onChange={(e) => handleTitleChange(e)} type="text" className="NotePage-title" value={noteTitle}></input>
            <textarea onChange={(e) => handleBodyChange(e)} className="NotePage-body" value={noteBody}></textarea>
            <button onClick={handleEdit}>edit</button>
        </div>
    )
}

export default NotePage