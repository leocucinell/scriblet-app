import "./NotesCard.css"
import { useSelector } from "react-redux"

const NotesCard = () => {

    const notes = useSelector((state) => state.currentStudent.value.notes);

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
                            <p key={note.id}>{note.title}</p>
                        )
                    })
                    :
                    <p>Loading...</p> //NOTE: change for UX
                }
            </div>
        </div>
    )
}

export default NotesCard;