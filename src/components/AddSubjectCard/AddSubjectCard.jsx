import "./AddSubjectCard.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { loadStudentSubjects } from "../../features/subjectsSlice";

import api from "../../api/api";

const AddSubjectCard = ({handleRemoveAddItem}) => {

    const dispatch = useDispatch();
    const [subjectName, setSubjectName] = useState("");
    const currentStudent = useSelector((state) => state.currentStudent.value);

    const handleAddSubject = async () => {
        //add the subject with api
        //reload the subjects
        await api.post('subject/add', {
            title: subjectName,
            studentId: currentStudent.id
        });
        handleRemoveAddItem();
        dispatch(loadStudentSubjects(currentStudent.id));
    }

    return(
        <div className="SubjectsCard-add-container">
            <form className="AddSubjectCard-form">
                <input onChange={(e) => setSubjectName(e.target.value)} value={subjectName} type="text" placeholder="Subject name..."/>
            </form>
            <button onClick={handleAddSubject}>add</button>
            <button onClick={handleRemoveAddItem}>-</button>
        </div>
    )
}

export default AddSubjectCard;