import "./CardsDisplay.css";
import { Link } from "react-router-dom";

const CardsDisplay = ({currentTab, cardSet}) => {
    return(
        <div className="CardDisplay-container">
            {
                cardSet ?
                cardSet.map((item) => {
                    return(
                        <Link to={`/${currentTab}/${item.id}`}>
                            <div className="CardDisplay-card">
                                <span className="CardDisplay-card-span" key={item.id}>{item.title}</span>
                            </div>
                        </Link>
                    )
                })
                :
                null
            }
        </div>
    )
}

export default CardsDisplay;