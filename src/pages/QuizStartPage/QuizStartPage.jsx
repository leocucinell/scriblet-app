import "./QuizStartPage.css"
import { useParams } from "react-router";

import QuizDisplay from "../../components/QuizDisplay/QuizDisplay";

const QuizStartPage = () => {

    const { quizId } = useParams();

    return(
        <div className="QuizStartPage-container">
            {/* <QuizDisplay /> */}
            <p>Quiz Display, after retrieval of data</p>
        </div>
    )
}

export default QuizStartPage;