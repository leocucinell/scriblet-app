import './MainButton.css';
import { Link } from 'react-router-dom';

const MainButton = ({content, navPoint}) => {
    return(
        <Link to={`/${navPoint}`}>
            <div className="MainButton-container">
                <span className="MainButton-span">{content}</span>
            </div>
        </Link>
    )
}

export default MainButton