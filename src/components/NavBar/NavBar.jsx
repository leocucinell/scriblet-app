import './NavBar.css'
import { useSelector } from 'react-redux';

import MainButton from '../MainButton/MainButton';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const NavBar = () => {

    const currentStudent = useSelector((state) => state.currentStudent.value);
    const renderBarContent = () => {
        if(Object.keys(currentStudent).length === 0){
            //No current student, render the login/signup buttons
            return(
                <div className="NavBar-buttons-container">
                    <MainButton navPoint="login" content="login" />
                    <MainButton navPoint="signup" content="sign up" />
                </div>
            )
        } else {
            //There is a current student, render the hamburger menu
            return(
                <HamburgerMenu />
            )
        }
    }

    return(
        <div className="NavBar-container">
            <span className="NavBar-span">Scriblet</span>
            {/* <div className="NavBar-buttons-container">
                <MainButton navPoint="login" content="login" />
                <MainButton navPoint="signup" content="sign up" />
            </div> */}
            {renderBarContent()}
        </div>
    );
}

export default NavBar