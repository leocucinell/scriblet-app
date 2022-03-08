import "./QuizPage.css";
import { useParams } from "react-router";

const QuizPage = () => {
    //NOTE: Page is reliant on the URL Params... not current user
    const { quizId } = useParams()
    return(
        <h1>QuizPage: {quizId}</h1>
    )
}

export default QuizPage