import "./EditQuizPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

import api from "../../api/api";

const EditQuizPage = () => {

    const { quizId } = useParams();
    const [quiz, setQuiz] = useState({});
    const [showCard, setShowCard] = useState(false);
    const [addQuestion, setAddQuestion] = useState("");
    const [addAnswer, setAddAnswer] = useState("");
    
    useEffect(() => {
        async function LoadQuiz(){
            const quizData = await api.get(`quiz/${quizId}`);
            setQuiz(quizData.data);
            return quizData.data;
        }
        LoadQuiz();
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
                            <button onClick={() => handleDeleteQuestion(question.id)}>-</button>
                        </div>
                    )
                })
                :
                <p>Write some questions to get started!</p>
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
                <span>{quiz.title}</span>
                <button onClick={handleAddCard}>+</button>
            </div>
            <div className="EditQuizPage-questions-container">
                {renderQuestionsList()}
                {
                    showCard ?
                    <div className="EditQuizPage-add-question">
                        <input onChange={(e) => handleQuestionChange(e)} value={addQuestion} type="text" placeholder="Question..." />
                        <input onChange={(e) => handleAnswerChange(e)} value={addAnswer} type="text" placeholder="Answer..." />
                        <button onClick={handleAddQuestion}>+</button>
                        <button onClick={handleRemoveAddQuestion}>-</button>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    );
}

export default EditQuizPage