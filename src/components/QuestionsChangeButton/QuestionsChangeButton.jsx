import "./QuestionsChangeButton.css";

const QuestionsChangeButton = ({operator, currentQuestion, setCurrentQuestion, length}) => {

    const handleClick = () => {
        if(operator === "plus"){
            if(currentQuestion +1 === length){
                return;
            }
            setCurrentQuestion(currentQuestion + 1)
        } else if (operator === "minus") {
            if(currentQuestion === 0){
                //maybe trigger an action later
                return;
            }
            setCurrentQuestion(currentQuestion - 1)
        } else {

        }
    }

    return(
        <div onClick={handleClick} className="QuestionsChangeButton-container">
            {
                operator === "plus" ?
                <span>{'>'}</span>
                :
                <span>{'<'}</span>
            }
        </div>
    )
}

export default QuestionsChangeButton;