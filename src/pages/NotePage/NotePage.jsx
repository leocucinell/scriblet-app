import "./NotePage.css";
import { useParams } from "react-router";

const NotePage = () => {
    //NOTE: Page is reliant on the URL Params... not current user
    const { noteId } = useParams();  
    return(
        <h1>NotePage: {noteId}</h1>
    )
}

export default NotePage