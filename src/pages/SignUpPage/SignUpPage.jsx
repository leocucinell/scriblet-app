import './SignUpPage.css';
import { useState } from 'react';

import api from '../../api/api';
import Toast from '../../components/Toast/Toast';

const SignUpPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPasswordToast, setShowPasswordToast] = useState(false);
    const [showEmailToast, setShowEmailToast] = useState(false);

    const handleFormChange = (e, caller) => {
        switch(caller){
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "confirm":
                setConfirmPassword(e.target.value);
                break;
            default: 
                console.log('unreachable case');
        }
    }

    const handleSubmit = async () => {
        if(confirmPassword !== password){
            console.log("password not equal to confirm");
            setPassword("");
            setConfirmPassword("");
            setShowPasswordToast(true);
            return;
        }
        const studentSignedUp = await api.post(
            'student/add', 
            {
                email: email,
                password: password
            }
        );
        console.log(studentSignedUp.data);
        if(studentSignedUp.data === "User with that email already exists"){
            console.log('ABove set show email toast')
            setShowEmailToast(true);
        }
    }

    const handleToastClick = (clicked) => {
        if(clicked === 'password'){
            setShowPasswordToast(false)
        }
        else if(clicked === 'email'){
            setShowEmailToast(false)
        }
    }

    return(
        <div className="SignUpPage-container">
            {
                showPasswordToast ?
                <Toast 
                    handleClick={() => handleToastClick('password')} 
                    message="password does not match confirm block section" 
                    warningColor="red" 
                />
                :
                null
            }
            {
                showEmailToast ?
                <Toast 
                    handleClick={() => handleToastClick("email")} 
                    message="user with that email already exists" 
                    warningColor="red" 
                />
                :
                null
            }
            <img id="SignUpPage-blob" src="signup-blob.svg" alt="signup-blob" />
            
            <div className="SignUpPage-form-card">
                <form className="SignUpPage-form">
                    <div id="SignUpPage-email-container">
                        <label className="SignUpPage-input-labels" htmlFor="email">email:</label>
                        <input onChange={(e) => handleFormChange(e, "email")} value={email} className="SignUpPage-inputs" type="email" id="SignUpPage-email" name="email" />
                    </div>
                    <div id="SignUpPage-password-container">
                        <label className="SignUpPage-input-labels" htmlFor="SignUpPage-password">password:</label>
                        <input onChange={(e) => handleFormChange(e, "password")} value={password} className="SignUpPage-inputs" type="password" id="SignUpPage-password" name="SignUpPage-password" />
                    </div>
                    <div id="SignUpPage-confirmpassword-container">
                        <label className="SignUpPage-input-labels" htmlFor="SignUpPage-confirm-password">confirm:</label>
                        <input onChange={(e) => handleFormChange(e, "confirm")} value={confirmPassword} className="SignUpPage-inputs" type="password" id="SignUpPage-confirm-password" name="SignUpPage-confirm-password" />
                    </div>
                </form>
                <button onClick={handleSubmit} className="SignUpPage-button">sign up</button>
            </div>

        </div>
    );
}

export default SignUpPage;