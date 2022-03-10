import "./QuizPage.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import api from "../../api/api";
import QuizDisplay from "../../components/QuizDisplay/QuizDisplay";

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
    //console.log(quiz)
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

    const renderQuizCard = () => {
        return(
            Object.keys(quiz).length !== 0 ?
                Object.keys(quiz.questions).length !== 0 ?
                    <QuizDisplay questions={quiz.questions} />
                :
                <p>Write some questions first!</p>
            :
            <p>Loading...</p>
        )
    }

    return(
        <div className="QuizPage-container">
            <span id="QuizPage-title">{quiz.title}</span>
            <div className="QuizPage-quiz-container">
                <div className="QuizPage-options-container">
                    <Link to={`/quiz/${quizId}/start`}><span id="QuizPage-start" className="QuizPage-option">Start</span></Link>
                    <Link to='/'><span id="QuizPage-edit" className="QuizPage-option">Edit</span></Link>
                    {/* NOTE: Change the to link above when ready */}
                </div>
                <div className="QuizPage-quiz">
                    {renderQuizCard()}
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