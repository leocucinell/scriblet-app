import "./CreateQuizCard.css";
import { useState } from "react";

import api from "../../api/api";

const CreateQuizCard = ({handleStop, subjectId, studentId, setSubjectObj}) => {
    //NOTE: setSubjectObj is here to reload the page on creation of a quiz

    const [title, setTitle] = useState("")

    const handleAdd = async () => {
        console.log('ADD THE QUIZ & RELOAD QUIZ LIST maybe nav user to quiz page?');
        const created = await api.post(
            '/quiz/add',
            {
                title: title,
                subjectId: subjectId,
                studentId: studentId
            }
        );
        const reloadedObject = await api.get(`subject/${subjectId}`);
        setSubjectObj(reloadedObject.data);
        handleStop();
    }

    return(
        <div className="CreateQuizCard-container">
            <form className="CreateQuizCard-form">
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Quiz name..." />
            </form>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleStop}>-</button>
        </div>
    )
}

export default CreateQuizCard;