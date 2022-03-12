import "./QuizPage.css";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { addStudent } from "../../features/currentStudentSlice";
import api from "../../api/api";
import QuizDisplay from "../../components/QuizDisplay/QuizDisplay";

const QuizPage = () => {
    //NOTE: Page is reliant on the URL Params... not current user
    const dispatch = useDispatch();
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState({});
    const currentStudent = useSelector((state) => state.currentStudent.value);

    useEffect(() => {
        //Load the quiz data
        async function LoadQuiz(){
            const quizData = await api.get(`quiz/${quizId}`);
            setQuiz(quizData.data);
        }
        LoadQuiz();

        //check the current Student
        if(Object.keys(currentStudent).length === 0){
            const isCurrentStudent = localStorage.getItem("ScribletCurrentStudent");
            if(isCurrentStudent){
                dispatch(addStudent(JSON.parse(isCurrentStudent)));
            }
        }
    }, []);

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
                    {
                        currentStudent.id === quiz.student_id ?
                        <Link to={`/quiz/${quizId}/edit`}><span id="QuizPage-edit" className="QuizPage-option">Edit</span></Link>
                        :
                        null
                    }
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