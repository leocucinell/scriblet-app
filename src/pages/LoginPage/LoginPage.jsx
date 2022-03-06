import './LoginPage.css';
import { useState } from 'react';
import api from '../../api/api';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");

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
        console.log('TODO: Finish Auth functionality after redux installed');
        console.log(loginResponse);
    }

    return(
        <div className="LoginPage-container">
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