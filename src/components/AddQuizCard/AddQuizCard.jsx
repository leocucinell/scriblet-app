import "./AddQuizCard.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import api from "../../api/api";
import { loadStudentQuizes } from "../../features/quizesSlice";

const AddQuizCard = ({handleRemoveAddItem}) => {

    const [quizTitle, setQuizTitle] = useState("");
    const [selectorValue, setSelectorValue] = useState("");

    const currentStudent = useSelector((state) => state.currentStudent.value);
    const studentSubjects = useSelector((state) => state.studentSubjects.value);

    const dispatch = useDispatch();
    useEffect(() => {
        setSelectorValue(studentSubjects[0].id)
    }, [studentSubjects]);

    const handleAddQuiz = async () => {
        await api.post(
            'quiz/add',
            {
                title: quizTitle,
                studentId: currentStudent.id,
                subjectId: parseInt(selectorValue)
            }
        )
        dispatch(loadStudentQuizes(currentStudent.id));
        handleRemoveAddItem()
    }

    const handleSelectorChange = (e) => {
        setSelectorValue(e.target.value)
    }

    const handleTitleChange = (e) => {
        setQuizTitle(e.target.value)
    }

    return(
        <div className="AddQuizCard-add-container">
            <form className="AddQuizCard-form">
                <input value={quizTitle} onChange={(e) => handleTitleChange(e)} type="text" placeholder="Quiz name..." />
                <select value={selectorValue} onChange={(e) => handleSelectorChange(e)}>
                    {
                        studentSubjects.map((subject) => {
                            return(
                                <option key={subject.id} value={subject.id}>{subject.title}</option>
                            )
                        })
                    }
                </select>
            </form>
            <button onClick={handleAddQuiz}>add</button>
            <button onClick={handleRemoveAddItem}>-</button>
        </div>
    );
}

export default AddQuizCard;