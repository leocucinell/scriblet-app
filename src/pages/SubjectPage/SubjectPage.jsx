import "./SubjectPage.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addStudent } from "../../features/currentStudentSlice";
import api from "../../api/api";
import DetailSelector from "../../components/DetailSelector/DetailSelector";

const SubjectPage = () => {
    //NOTE: Page is reliant on the URL Params... not current user
    const { subjectId } = useParams();
    const [subjectObj, setSubjectObj] = useState({});
    const currentStudent = useSelector((state) => state.currentStudent.value);
    const dispatch = useDispatch()

    useEffect(() => {

        //if no current student
        if(Object.keys(currentStudent).length === 0){
            //grab student from local storage
            const isCurrentStudent = localStorage.getItem("ScribletCurrentStudent");
            if(isCurrentStudent){
                dispatch(addStudent(JSON.parse(isCurrentStudent)));
            }
        }

        async function retrieveSubject(){
            const subject = await api.get(`subject/${subjectId}`);
            setSubjectObj(subject.data);
        }
        retrieveSubject();
    }, [])
    return(
        <div className="SubjectPage-container">
            <h1>{subjectObj.title}</h1>
            <DetailSelector subject={subjectObj} />
        </div>
    )
}

export default SubjectPage