import './NavBar.css'
import MainButton from '../MainButton/MainButton';

const NavBar = () => {
    return(
        <div className="NavBar-container">
            <span className="NavBar-span">Scriblet</span>
            <div className="NavBar-buttons-container">
                <MainButton content="login" />
                <MainButton content="sign up" />
            </div>
        </div>
    );
}

export default NavBar