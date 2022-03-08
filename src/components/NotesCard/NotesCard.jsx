import "./NotesCard.css"
import { useSelector } from "react-redux"

import StudyItem from "../StudyItem/StudyItem";

const NotesCard = () => {

    const notes = useSelector((state) => state.studentNotes.value);

    return(
        <div className="NotesCard-container">
            <div className="NotesCard-banner">
                <h2>Notes</h2>
                <button>+</button>
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