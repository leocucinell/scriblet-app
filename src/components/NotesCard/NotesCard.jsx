import "./NotesCard.css"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router";

import StudyItem from "../StudyItem/StudyItem";

const NotesCard = () => {

    const navigate = useNavigate();
    const notes = useSelector((state) => state.studentNotes.value);

    const handleAddNote = () => {
        navigate('/note/new');
    }

    return(
        <div className="NotesCard-container">
            <div className="NotesCard-banner">
                <span className="Home-card-title">Notes</span>
                <button className="Home-add-button" onClick={handleAddNote}><span className="Home-add-span">+</span></button>
            </div>
            <hr />
            <div className='NotesCard-list'>
                {
                    ((notes !== undefined) && (notes.length > 0)) ?
                    notes.map((note) => {
                        return(
                            <div key={note.id}>
                                <StudyItem id={note.id} caller="note" title={note.title} />
                            </div>
                        );
                    })
                    :
                    <p>Loading...</p> //NOTE: change for UX
                }
            </div>
        </div>
    )
}

export default NotesCard;