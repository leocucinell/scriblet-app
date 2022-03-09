import "./QuizesCard.css"
import { useSelector } from "react-redux"
import { useState } from "react"

import StudyItem from "../StudyItem/StudyItem"

import AddQuizCard from "../AddQuizCard/AddQuizCard"

const QuizesCard = () => {

    const quizes = useSelector((state) => state.studentQuizes.value);
    const [showAddItem, setShowAddItem] = useState(false);

    const handleAddItem = () => {
        setShowAddItem(true);
    }

    const handleRemoveAddItem = () => {
        setShowAddItem(false)
    }

    return(
        <div className="QuizesCard-container">
            <div className="QuizesCard-banner">
                <h2>Quizes</h2>
                <button onClick={handleAddItem}>+</button>
            </div>
            <hr />
            <div className='QuizesCard-list'>
                {
                    ((quizes !== undefined) && (quizes.length > 0)) ?
                    quizes.map((quiz) => {
                        return(
                            <div key={quiz.id}>
                                <StudyItem id={quiz.id} caller="quiz" title={quiz.title} />
                            </div>
                        )
                    })
                    :
                    <p>Loading...</p>
                }
                {
                    showAddItem ?
                    <AddQuizCard handleRemoveAddItem={handleRemoveAddItem} />
                    :
                    null
                }
            </div>
        </div>
    )
}

export default QuizesCard