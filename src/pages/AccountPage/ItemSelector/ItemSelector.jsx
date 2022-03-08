import "./ItemSelector.css"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CardsDisplay from "../CardsDisplay/CardsDisplay";

const ItemSelector = () => {

    const [currentTab, setCurrentTab] = useState("subjects");
    const [subjectColor, setSubjectColor] = useState("yellow")
    const [quizColor, setQuizColor] = useState("white")
    const [noteColor, setNoteColor] = useState("white")
    const [currentCardSet, setCurrentCardSet] = useState([]);
    const studentSubjects = useSelector((state) => state.studentSubjects.value);
    const studentQuizes = useSelector((state) => state.studentQuizes.value);
    const studentNotes = useSelector((state) => state.studentNotes.value);

    useEffect(() => {
        setCurrentCardSet(studentSubjects)
    }, [studentSubjects])

    const handleTabSelect = (selected) => {
        switch(selected){
            case "subjects":
                setCurrentTab("subjects");
                setSubjectColor("yellow");
                setQuizColor("white");
                setNoteColor("white");
                setCurrentCardSet(studentSubjects);
                break;
            case "quizes":
                setCurrentTab("quizes");
                setSubjectColor("white");
                setQuizColor("yellow");
                setNoteColor("white");
                setCurrentCardSet(studentQuizes);
                break;
            case "notes":
                setCurrentTab("notes");
                setSubjectColor("white");
                setQuizColor("white");
                setNoteColor("yellow");
                setCurrentCardSet(studentNotes);
                break;
            default:
                console.log("Unreachable Selection");
        }
    }

    return (
        <div className="ItemSelector-container">
            <div className="ItemSelector-tab-container">
                <div 
                    style={{backgroundColor: subjectColor}} 
                    onClick={() => handleTabSelect("subjects")} 
                    className="ItemSelector-tab"
                >
                    <span>subjects</span>
                </div>
                <div 
                    style={{backgroundColor: quizColor}}
                    onClick={() => handleTabSelect("quizes")} 
                    className="ItemSelector-tab"
                >
                    <span>quizes</span>
                </div>
                <div 
                    style={{backgroundColor: noteColor}}
                    onClick={() => handleTabSelect("notes")} 
                    className="ItemSelector-tab"
                >
                    <span>notes</span>
                </div>
            </div>
            <div className="ItemSelector-cards-container">
                <CardsDisplay currentTab={currentTab} cardSet={currentCardSet} />
            </div>
        </div>
    )
}

export default ItemSelector;