import "./SubjectsCard.css";
import { useSelector } from "react-redux";

import StudyItem from "../StudyItem/StudyItem";

const SubjectsCard = () => {

    const subjects = useSelector((state) => state.studentSubjects.value);

    return(
        <div className="SubjectsCard-container">
            <div className="SubjectsCard-banner">
                <h2>Subjects</h2>
                <button>+</button>
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
            </div>
        </div>
    )
}

export default SubjectsCard