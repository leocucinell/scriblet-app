import "./ItemSelector.css"
import { useState } from "react";

const ItemSelector = () => {

    const [currentTab, setCurrentTab] = useState("subjects")

    const handleTabSelect = (selected) => {
        switch(selected){
            case "subjects":
                setCurrentTab("subjects");
                break;
            case "quizes":
                setCurrentTab("quizes");
                break;
            case "notes":
                setCurrentTab("notes");
                break;
            default:
                console.log("Unreachable Selection");
        }
    }

    return (
        <div className="ItemSelector-container">
            <div className="ItemSelector-tab-container">
                <div onClick={() => handleTabSelect("subjects")} className="ItemSelector-tab">
                    <span>subjects</span>
                </div>
                <div onClick={() => handleTabSelect("quizes")} className="ItemSelector-tab">
                    <span>quizes</span>
                </div>
                <div onClick={() => handleTabSelect("notes")} className="ItemSelector-tab">
                    <span>notes</span>
                </div>
            </div>
            <div className="ItemSelector-cards-container">
                <p>Edit me: {currentTab}</p>
            </div>
        </div>
    )
}

export default ItemSelector;