import "./Home.css"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { addStudent } from "../../features/currentStudentSlice";

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
        <h1>Home</h1>
    );
}

export default Home;