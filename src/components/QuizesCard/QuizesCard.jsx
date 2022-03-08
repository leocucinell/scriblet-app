import "./QuizesCard.css"
import { useSelector } from "react-redux"

import StudyItem from "../StudyItem/StudyItem"

const QuizesCard = () => {

    const quizes = useSelector((state) => state.studentQuizes.value)

    return(
        <div className="QuizesCard-container">
            <div className="QuizesCard-banner">
                <h2>Quizes</h2>
                <button>+</button>
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
            </div>
        </div>
    )
}

export default QuizesCard