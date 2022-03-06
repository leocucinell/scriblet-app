import './Toast.css';

const Toast = ({message, warningColor, handleClick}) => {
    return(
        <div onClick={handleClick} className="Toast-container">
            <div style={{ backgroundColor: warningColor }} className="Toast-warning-color"></div>
            <div className="Toast-message-container">
                <span id="Toast-message">{message}</span>
            </div>
        </div>
    )
}

export default Toast;