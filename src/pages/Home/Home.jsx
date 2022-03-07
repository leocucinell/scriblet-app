import "./Home.css"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { addStudent } from "../../features/currentStudentSlice";
import SubjectsCard from "../../components/SubjectsCard/SubjectsCard";
import QuizesCard from "../../components/QuizesCard/QuizesCard";
import NotesCard from "../../components/NotesCard/NotesCard";

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentStudent = useSelector((state) => state.currentStudent.value);

    useEffect(() => {
        //Check if there is a use saved in redux state
        //if not, check the local storage
        if(Object.keys(currentStudent).length === 0){
            const isCurrentStudent = localStorage.getItem("ScribletCurrentStudent");
            if(isCurrentStudent){
                dispatch(addStudent(JSON.parse(isCurrentStudent)));
            } else {
                //Navigates a user back to landing if no user is saved in 
                //local storage or Redux state
                navigate('/');
            }
        }
    }, []);

    return(
        <div className="Home-container">
            {/* <img id="Home-blob" alt='home blob' src="signup-blob.svg" /> */}

            <div className="Home-grid-container">
                <div className="Home-subjects-container">
                    <SubjectsCard />
                </div>
                <div className="Home-quizes-container">
                    <QuizesCard />
                </div>
                <div className="Home-notes-container">
                    <NotesCard />
                </div>
            </div>

        </div>
    );
}

export default Home;