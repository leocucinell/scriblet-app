import "./QuizesCard.css"
import { useSelector } from "react-redux"

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
                            <p key={quiz.id}>{quiz.title}</p>
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