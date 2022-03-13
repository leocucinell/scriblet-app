import "./EditQuizPage.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { addStudent } from "../../features/currentStudentSlice";
import api from "../../api/api";

const EditQuizPage = () => {

    const navigate = useNavigate();
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState({});
    const [showCard, setShowCard] = useState(false);
    const [addQuestion, setAddQuestion] = useState("");
    const [addAnswer, setAddAnswer] = useState("");
    const dispatch = useDispatch();
    const currentStudent = useSelector((state) => state.currentStudent.value);
    
    useEffect(() => {
        //Load the quiz into state
        async function LoadQuiz(){
            const quizData = await api.get(`quiz/${quizId}`);
            setQuiz(quizData.data);
            return quizData.data;
        }
        LoadQuiz();

        //Check the user
        if(Object.keys(currentStudent).length === 0){
            const isCurrentStudent = localStorage.getItem("ScribletCurrentStudent");
            if(isCurrentStudent){
                dispatch(addStudent(JSON.parse(isCurrentStudent)));
            } else {
                //Navigates a user back to landing if no user is saved in 
                //local storage or Redux state
                navigate('/');
            }
        }

    }, []);

    const handleDeleteQuestion = async (id) => {
        await api.delete(`question/${id}`);
        async function LoadQuiz(){
            const quizData = await api.get(`quiz/${quizId}`);
            setQuiz(quizData.data);
            return quizData.data;
        }
        LoadQuiz();
    }

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
                            <button className="EditQuizPage-delete-question" onClick={() => handleDeleteQuestion(question.id)}><span className="EditQuizPage-delete-span">-</span></button>
                        </div>
                    )
                })
                :
                <p>Click the plus button to add a question!</p>
            :
            <p>Loading...</p>
        )
    }

    const handleAddCard = () => {
        setShowCard(true);
    }

    const handleQuestionChange = (e) => {
        setAddQuestion(e.target.value)
    }
    const handleAnswerChange = (e) => {
        setAddAnswer(e.target.value)
    }
    const handleRemoveAddQuestion = () => {
        setShowCard(false)
    }
    const handleAddQuestion = async () => {
        await api.post(
            'question/add', 
            {
                questionTitle: addQuestion,
                questionAnswer: addAnswer,
                quizId: quizId
            }
        );
        setShowCard(false);
        setAddQuestion("");
        setAddAnswer("");
        async function LoadQuiz(){
            const quizData = await api.get(`quiz/${quizId}`);
            setQuiz(quizData.data);
            return quizData.data;
        }
        LoadQuiz();
    }

    return(
        <div className="EditQuizPage-container">
            <div className="EditQuizPage-title-banner">
                <Link to={`/quiz/${quizId}`}><span className="EditQuizPage-title">{quiz.title}</span></Link>
                <button className="EditQuizPage-add-button" onClick={handleAddCard}><span className="EditQuizPage-add-span">+</span></button>
            </div>
            <div className="EditQuizPage-questions-container">
                {renderQuestionsList()}
                {
                    showCard ?
                    <div className="EditQuizPage-add-question">
                        <input className="EditQuizPage-input-container" onChange={(e) => handleQuestionChange(e)} value={addQuestion} type="text" placeholder="Question..." />
                        <input className="EditQuizPage-input-container" onChange={(e) => handleAnswerChange(e)} value={addAnswer} type="text" placeholder="Answer..." />
                        <div  className="EditQuizPage-add-buttons">
                            <button className="EditQuizPage-add-button-plus" onClick={handleAddQuestion}><span className="EditQuizPage-plus-button-span">+</span></button>
                            <button className="EditQuizPage-add-button-minus" onClick={handleRemoveAddQuestion}><span className="EditQuizPage-minus-button-span">-</span></button>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    );
}

export default EditQuizPage