import "./CardsDisplay.css";

const CardsDisplay = ({currentTab, cardSet}) => {
    return(
        <div className="CardDisplay-container">
            {
                cardSet ?
                cardSet.map((item) => {
                    return(
                        <p key={item.id}>{item.title}</p>
                    )
                })
                :
                null
            }
        </div>
    )
}

export default CardsDisplay;