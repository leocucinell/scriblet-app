import './LoginPage.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import api from '../../api/api';
import Toast from '../../components/Toast/Toast';
import { addStudent } from '../../features/currentStudentSlice'; 

const LoginPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");
    const [invalidEmailToast, setInvalidEmailToast] = useState(false);
    const [invalidPasswordToast, setInvalidPasswordToast] = useState(false);
    
    
    const handleFormChange = (e, caller) => {
        switch(caller){
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default: 
                console.log('unreachable case');
        }
    }

    const handleSubmit = async () => {
        // Log the user into the application
        const loginResponse = await api.post(
            "student/login",
            {
                email: email,
                password: password
            }
        );
        if(loginResponse.data === "user does not exist"){
            setInvalidEmailToast(true);
        } else if (loginResponse.data === "Incorrect password"){
            setInvalidPasswordToast(true)
        } else {
            localStorage.setItem("ScribletCurrentStudent", JSON.stringify(loginResponse.data));
            dispatch(addStudent(loginResponse.data));
            navigate('/home');
        }
        return;
    }

    const handleToastClick = (caller) => {
        switch(caller){
            case "email":
                setInvalidEmailToast(false);
                break;
            case "password":
                setInvalidPasswordToast(false);
                break;
            default:
                console.log("Unreachable toast click case")
        }
    }

    return(
        <div className="LoginPage-container">
            {
                invalidEmailToast ?
                <Toast
                    handleClick={() => handleToastClick("email")}
                    message="User does not exist"
                    warningColor="yellow"
                />
                :
                null
            }
            {
                invalidPasswordToast ?
                <Toast 
                    handleClick={() => handleToastClick("password")}
                    message="Invalid password"
                    warningColor="red"
                />
                :
                null
            }
            <img id="LoginPage-blob" src="login-blob.svg" alt="login-blob" />
            
            <div className="LoginPage-form-card">
                <form className="LoginPage-form">
                    <div id="LoginPage-email-container">
                        <label className="LoginPage-input-labels" htmlFor="email">email:</label>
                        <input onChange={(e) => handleFormChange(e, "email")} value={email} className="LoginPage-inputs" type="text" id="email" name="email" />
                    </div>
                    <div id="LoginPage-password-container">
                        <label className="LoginPage-input-labels" htmlFor="LoginPage-password">password:</label>
                        <input onChange={(e) => handleFormChange(e, "password")} value={password} className="LoginPage-inputs" type="password" id="LoginPage-password" name="LoginPage-password" />
                    </div>
                </form>
                <button onClick={handleSubmit} className="LoginPage-button">login</button>
            </div>

        </div>
    );
}

export default LoginPage;