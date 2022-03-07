import "./SubjectsCard.css";
import { useSelector } from "react-redux";

const SubjectsCard = () => {

    const subjects = useSelector((state) => state.currentStudent.value.subjects);

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
                            //NOTE: Make a card component after styling home page
                            <p key={subject.id}>{subject.title}</p>
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