import "./QuizDisplay.css"
import { useState } from "react";

import QuestionsChangeButton from "../QuestionsChangeButton/QuestionsChangeButton";

const QuizDisplay = ({questions}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(!showAnswer);
    }

    const nextQuestionHandler = () => {
        setShowAnswer(false);
    }

    return(
        <div className="QuizDisplay-container">
            <div onClick={handleClick} className="QuizDisplay-card">
                {
                    !showAnswer ?
                    <span className="QuizDisplay-card-text">{questions[currentQuestion].title}</span>
                    :
                    <span className="QuizDisplay-card-text">{questions[currentQuestion].answer}</span>
                }
            </div>
            <div className="QuizDisplay-bottom-bar">
                <div onClick={nextQuestionHandler}>
                    <QuestionsChangeButton operator="minus" currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} length={questions.length} />
                </div>
                <span className="QuizDisplay-progress">
                    {currentQuestion + 1} / {questions.length}
                </span>
                <div onClick={nextQuestionHandler}>
                    <QuestionsChangeButton operator="plus" currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} length={questions.length} />
                </div>
            </div> 
        </div>
    )
}

export default QuizDisplay;