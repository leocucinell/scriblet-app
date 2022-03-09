import "./SubjectsCard.css";
import { useSelector } from "react-redux";
import { useState } from "react";

import StudyItem from "../StudyItem/StudyItem";
import AddSubjectCard from "../AddSubjectCard/AddSubjectCard";

const SubjectsCard = () => {

    const subjects = useSelector((state) => state.studentSubjects.value);
    const [showAddItem, setShowAddItem] = useState(false);

    const handleAddSubject = () => {
        setShowAddItem(true);
    }

    const handleRemoveAddItem = () => {
        setShowAddItem(false);
    }

    return(
        <div className="SubjectsCard-container">
            <div className="SubjectsCard-banner">
                <h2>Subjects</h2>
                <button onClick={handleAddSubject}>+</button>
            </div>
            <hr />
            <div className="SubjectsCard-list">
                {
                    ((subjects !== undefined) && (subjects.length > 0)) ?
                    subjects.map((subject) => {
                        return(
                            <div key={subject.id}>
                                <StudyItem id={subject.id} caller="subject" title={subject.title} />
                            </div>
                        )
                    })
                    :
                    <p>Loading...</p>
                }
                {
                    showAddItem ?
                    <AddSubjectCard handleRemoveAddItem={handleRemoveAddItem} />
                    :
                    null
                }
            </div>
        </div>
    )
}

export default SubjectsCard