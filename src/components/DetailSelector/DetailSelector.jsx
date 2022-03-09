import "./DetailSelector.css"
import { useState } from "react"

import CardsView from "../CardsView/CardsView"

const DetailSelector = ({subject}) => {

    const [currentTab, setCurrentTab] = useState("quiz")

    return(
        <div className="DetailSelector-container">
            <div className="DetailSelector-tab-container">
                <div 
                    className="DetailSelector-tab"
                    onClick={(e) => setCurrentTab("quiz")}
                >
                    <span>quizes</span>
                </div>
                <div 
                    className="DetailSelector-tab"
                    onClick={(e) => setCurrentTab("note")}
                >
                    <span>notes</span>
                </div>
            </div>
            <div className='DetailSelector-options'>
                <CardsView
                    currentTab={currentTab} 
                    notes={subject.notes}
                    quizes={subject.quizes}    
                />
            </div>
        </div>
    )
}

export default DetailSelector