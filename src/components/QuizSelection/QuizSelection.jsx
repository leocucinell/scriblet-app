import "./QuizSelection.css";
import { useState } from "react";

import QuizDisplay from "../QuizDisplay/QuizDisplay";

const QuizSelection = () => {

    const [selectedQuiz, setSelectedQuiz] = useState("math");
    const [mathColor, setMathColor] = useState("yellow");
    const [historyColor, setHistoryColor] = useState("#FFFFFF");
    const [scienceColor, setScienceColor] = useState("#FFFFFF");

    const handleMathClick = () => {
        setSelectedQuiz("math");
        setMathColor("yellow");
        setHistoryColor("#FFFFFF");
        setScienceColor("#FFFFFF");
    }
    const handleHistoryClick = () => {
        setSelectedQuiz("history");
        setMathColor("#FFFFFF");
        setHistoryColor("yellow");
        setScienceColor("#FFFFFF");
    }
    const handleScienceClick = () => {
        setSelectedQuiz("science");
        setMathColor("#FFFFFF");
        setHistoryColor("#FFFFFF");
        setScienceColor("yellow");
    }

    const mathQuestions = [
        {title: "What triangle has 3 equal angles?", answer: "equilateral triangle"},
        {title: "What is the acronymm we use to rememeber the order of operations?", answer: "PEMDAS"},
        {title: "sin / cos = ?", answer: "tan"},
        {title: "What is the longest side of a triangel called", answer: "Hypotenuse"},
        {title: "A quantity with direction and magnitude?", answer: "Vector"}
    ]
    const historyQuestions = [
        {title: "What year did the Us declare independence?", answer: "1776"},
        {title: "Who was the first president of the US?", answer: "George Washington"},
        {title: "What event is seen as the trigger to WWI?", answer: "The assassination of Austrian Archduke Franz Ferdinand (June 28, 1914)"},
        {title: "Where did the Wright brothers take flight first?", answer: "Kitty Hawk, North Carolina"},
        {title: "What was the largest contiguous empire in history?", answer: "The Mongol empire"}
    ]
    const scienceQuestions = [
        {title: "What do plant cells have that animal cells dont?", answer: "Cell wall / chloroplasts"},
        {title: "What is the chemical equation for water?", answer: "H2O"},
        {title: "What are the products of photosynthesis?", answer: "Glucose & Oxygen"},
        {title: "What are the charged particles surrounding the nucleus of an atom?", answer: "Electron"},
        {title: "What is the first element of the periodic table?", answer: "Hydrogen"}
    ]

    return(
        <div className="QuizSelection-container">
            <div className="QuizSelection-options-container">
                <div onClick={handleMathClick} style={{backgroundColor: mathColor}} id="QuizSelection-option-math" className="QuizSelection-option">
                    <span className="QuizSelection-option-span">Math</span>
                </div>
                <div onClick={handleHistoryClick} style={{backgroundColor: historyColor}} id="QuizSelection-option-history" className="QuizSelection-option">
                    <span className="QuizSelection-option-span">History</span>
                </div>
                <div onClick={handleScienceClick} style={{backgroundColor: scienceColor}} id="QuizSelection-option-science" className="QuizSelection-option">
                    <span className="QuizSelection-option-span">Science</span>
                </div>
            </div>
            <div className="QuizSelection-quiz-container">
                <QuizDisplay questions={
                    selectedQuiz === "math"?
                    mathQuestions
                    :
                    selectedQuiz === "history"?
                    historyQuestions
                    :
                    selectedQuiz === "science"?
                    scienceQuestions
                    :
                    [{title: "Hello", answer: "World"}]
                }/>
            </div>
        </div>
    );
}

export default QuizSelection;