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
            <input className="SubjectCard-add-input" onChange={(e) => setSubjectName(e.target.value)} value={subjectName} type="text" placeholder="Subject name..."/>
            <button className="SubjectCard-confirm-btn" onClick={handleAddSubject}>add</button>
            <button className="SubjectCard-delete-btn" onClick={handleRemoveAddItem}>-</button>
        </div>
    )
}

export default AddSubjectCard;