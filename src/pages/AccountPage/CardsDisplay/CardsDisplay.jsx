import "./CardsDisplay.css";
import { Link } from "react-router-dom";

const CardsDisplay = ({currentTab, cardSet}) => {
    return(
        <div className="CardDisplay-container">
            {
                cardSet ?
                cardSet.map((item) => {
                    return(
                        <div key={item.id}>
                            <Link to={`/${currentTab}/${item.id}`}>
                                <div className="CardDisplay-card">
                                    <span className="CardDisplay-card-span">{item.title}</span>
                                </div>
                            </Link>
                        </div>
                    )
                })
                :
                null
            }
        </div>
    )
}

export default CardsDisplay;