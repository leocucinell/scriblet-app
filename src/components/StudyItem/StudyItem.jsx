import "./StudyItem.css";
import { Link } from "react-router-dom";

const StudyItem = ({ title, id, caller }) => {
    return(
        <Link className="StudyItem-Link" to={`/${caller}/${id}`}>
            <div className="StudyItem-container">
                <span className="StudyItem-span">{title}</span>
                <hr className="StudyItem-hr" />
            </div>
        </Link>
    );
}

export default StudyItem