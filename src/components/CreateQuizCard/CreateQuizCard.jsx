import "./CreateQuizCard.css";
import { useState } from "react";

import api from "../../api/api";

const CreateQuizCard = ({handleStop, subjectId, studentId, setSubjectObj}) => {

    const [title, setTitle] = useState("")

    const handleAdd = async () => {
        console.log('ADD THE QUIZ & RELOAD QUIZ LIST maybe nav user to quiz page?');
        await api.post(
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
            <input className="CreateQuizCard-input" onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Quiz name..." />
            <div className="CreateQuizCard-btns-container">
                <button className="CreateQuizCard-btn" onClick={handleAdd}>Add</button>
                <button id="CreateQuizCard-minus-btn" className="CreateQuizCard-btn" onClick={handleStop}>-</button>
            </div>
        </div>
    )
}

export default CreateQuizCard;