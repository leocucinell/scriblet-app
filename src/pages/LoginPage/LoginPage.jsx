import './LoginPage.css';

const LoginPage = () => {
    return(
        <div className="LoginPage-container">
            <img id="LoginPage-blob" src="login-blob.svg" alt="login-blob" />
            
            <div className="LoginPage-form-card">
                <form className="LoginPage-form">
                    <div id="LoginPage-email-container">
                        <label className="LoginPage-input-labels" for="email">email:</label>
                        <input className="LoginPage-inputs" type="text" id="email" name="email" />
                    </div>
                    <div id="LoginPage-password-container">
                        <label className="LoginPage-input-labels" for="LoginPage-password">password:</label>
                        <input className="LoginPage-inputs" type="text" id="LoginPage-password" name="LoginPage-password" />
                    </div>
                </form>
                <button className="LoginPage-button">login</button>
            </div>

        </div>
    );
}

export default LoginPage;