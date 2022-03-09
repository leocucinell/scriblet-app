import "./QuizPage.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

import api from "../../api/api";

const QuizPage = () => {
    //NOTE: Page is reliant on the URL Params... not current user
    const { quizId } = useParams()
    const [quiz, setQuiz] = useState({})

    useEffect(() => {
        async function LoadQuiz(){
            const quizData = await api.get(`quiz/${quizId}`);
            setQuiz(quizData.data);
        }
        LoadQuiz();
    }, [])

    //NOTE: Delete me after testing page
    console.log(quiz)
    //-----------------------------------

    const renderQuestionsList = () => {
        return(
            Object.keys(quiz).length !== 0 ?
                Object.keys(quiz.questions).length !== 0 ?
                quiz.questions.map((question) => {
                    return(
                        <div key={question.id} className="QuizPage-question-card">
                            <div className="QuizPage-question-side">
                                <span>{question.title}</span>
                            </div>
                            <hr />
                            <div className="QuizPage-answer-side">
                                <span>{question.answer}</span>
                            </div>
                        </div>
                    )
                })
                :
                <p>Write some questions to get started!</p>
            :
            <p>Loading...</p>
        )
    }

    return(
        <div className="QuizPage-container">
            <span>{quiz.title}</span>
            <div className="QuizPage-quiz-container">
                <div className="QuizPage-options-container">
                    <p>Options container</p>
                </div>
                <div className="QuizPage-quiz">
                    <p>Quiz Container</p>
                </div>
            </div>
            <hr />
            <div className="QuizPage-quiestions-list">
                {renderQuestionsList()}
            </div>
        </div>
    )
}

export default QuizPage