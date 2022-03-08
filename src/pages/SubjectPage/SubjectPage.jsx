import "./SubjectPage.css";
import { useParams } from "react-router";

const SubjectPage = () => {
    //NOTE: Page is reliant on the URL Params... not current user
    const { subjectId } = useParams();
    return(
        <h1>SubjectPage: {subjectId}</h1>
    )
}

export default SubjectPage