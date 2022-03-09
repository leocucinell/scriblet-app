import "./CardsView.css";
import { Link } from "react-router-dom";

const CardsView = ({currentTab, notes, quizes}) => {

    const renderList = () => {
        if(currentTab === 'quiz'){
            return(
                <div className="CardsView-list">
                    {
                    quizes !== undefined ?
                    quizes.map((quiz) => {
                        return(
                            <div key={quiz.id} className="CardsView-card">
                                <Link to={`/${currentTab}/${quiz.id}`}>
                                <div className="CardsView-card-content">
                                    <span>{quiz.title}</span>
                                </div>
                                </Link>
                            </div>
                        )
                    })
                    :
                    null
                    }
                </div>
            )
        } else if(currentTab === 'note') {
            return(
                <div className="CardsView-list">
                    {
                    notes !== undefined ?
                    notes.map((note) => {
                        return(
                            <div key={note.id} className="CardsView-card">
                                <Link to={`/${currentTab}/${note.id}`}>
                                <div className="CardsView-card-content">
                                    <span>{note.title}</span>
                                </div>
                                </Link>
                            </div>
                        )
                    })
                    :
                    null
                    }
                </div>
            )
        } else {
            return(
                <p>Unsupported objects list</p>
            )
        }
    }

    return(
        <div className="CardsView-container">
            {renderList()}
        </div>
    )
}

export default CardsView;