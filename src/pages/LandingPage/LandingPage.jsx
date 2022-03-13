import './LandingPage.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../features/currentStudentSlice';

import MainButton from '../../components/MainButton/MainButton';

const LandingPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        //checks for the current student in local storage
        //meaning a student has logged in on this device before
        const isCurrentStudent = localStorage.getItem("ScribletCurrentStudent");
        //set the currentStudent & navigate to home
        if(isCurrentStudent){
            dispatch(addStudent(JSON.parse(isCurrentStudent)));
            navigate('/home');
        }
    }, [dispatch, navigate]);

    return(
        <div className="LandingPage-container">

            <div className="LandingPage-header">
                <img id="LandingPage-svg-background" alt="background-slide" src='landing-background.svg' />

                <div className="LandingPage-main-card">
                    <span id="LandingPage-span-1">Enhance</span>
                    <span id="LandingPage-span-2">Your</span>
                    <span id="LandingPage-span-3">Learning</span>
                    <div id="LandingPage-mainbutton-container">
                        <MainButton navPoint="login" content="get started" />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default LandingPage;