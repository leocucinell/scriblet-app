import "./DetailSelector.css"
import { useState } from "react"
import { useNavigate } from "react-router"

import CardsView from "../CardsView/CardsView"
import CreateQuizCard from "../CreateQuizCard/CreateQuizCard"

const DetailSelector = ({setSubjectObj, subject, currentStudent}) => {

    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState("quiz")
    const [quizColor, setQuizColor] = useState("yellow")
    const [noteColor, setNoteColor] = useState("white")
    const [showCreateQuiz, setShowCreateQuiz] = useState(false)

    const handleAdd = () => {
        if(currentTab === "quiz"){
            setShowCreateQuiz(true);
        } else if (currentTab === "note"){
            // navigate('/notes/add')
            console.log('Handle create note')
        }
    }

    const handleStop = () => {
        setShowCreateQuiz(false)
    }

    return(
        <div className="DetailSelector-container">
            <div className="DetailSelector-tab-container">
                <div 
                    style={{backgroundColor: quizColor}}
                    className="DetailSelector-tab"
                    onClick={(e) => {
                        setCurrentTab("quiz")
                        setNoteColor("white")
                        setQuizColor("yellow")
                    }}
                >
                    <span>quizes</span>
                </div>
                <div 
                    style={{backgroundColor: noteColor}}
                    className="DetailSelector-tab"
                    onClick={(e) => {
                        setCurrentTab("note")
                        setNoteColor("yellow")
                        setQuizColor("white")
                    }}
                >
                    <span>notes</span>
                </div>
                {
                    subject.owner_id === currentStudent.id ?
                    <button onClick={handleAdd}>+</button>
                    :
                    null
                }
            </div>
            <hr id="DetailSelector-hr" />
            <div className='DetailSelector-options'>
                <CardsView
                    currentTab={currentTab} 
                    notes={subject.notes}
                    quizes={subject.quizes}    
                />
                {
                    showCreateQuiz ?
                    <CreateQuizCard handleStop={handleStop} subjectId={subject.id} studentId={currentStudent.id} setSubjectObj={setSubjectObj} />
                    :
                    null
                }
            </div>
        </div>
    )
}

export default DetailSelector