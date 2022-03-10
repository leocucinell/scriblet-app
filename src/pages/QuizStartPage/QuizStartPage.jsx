import "./QuizStartPage.css"
import { useParams } from "react-router";
import { useState, useEffect } from "react";

import QuizDisplay from "../../components/QuizDisplay/QuizDisplay";
import api from "../../api/api";

const QuizStartPage = () => {

    const { quizId } = useParams();
    const [quiz, setQuiz] = useState({});

    useEffect(() => {
        async function LoadQuiz(){
            const quizData = await api.get(`quiz/${quizId}`);
            setQuiz(quizData.data);
        }
        LoadQuiz();
    }, []);

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
        <div className="QuizStartPage-container">
            {renderQuizCard()}
        </div>
    )
}

export default QuizStartPage;