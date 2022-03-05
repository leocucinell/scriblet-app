import './MainButton.css';

const MainButton = ({content}) => {
    return(
        <div className="MainButton-container">
            <span className="MainButton-span">{content}</span>
        </div>
    )
}

export default MainButton