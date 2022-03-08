import './NavBar.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import MainButton from '../MainButton/MainButton';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SliderMenu from '../SliderMenu/SliderMenu';

const NavBar = () => {

    const currentStudent = useSelector((state) => state.currentStudent.value);
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();

    const handlehamburgerClick = () => {
        setToggleMenu(!toggleMenu);
    }


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
                <HamburgerMenu handlehamburgerClick={handlehamburgerClick} />
            )
        }
    }

    const handleLogoClick = () => {
        navigate('/home');
        setToggleMenu(false);
    }

    return(
        <div className="NavBar-container">
            <span onClick={handleLogoClick} className="NavBar-span">Scriblet</span>
            {/* <div className="NavBar-buttons-container">
                <MainButton navPoint="login" content="login" />
                <MainButton navPoint="signup" content="sign up" />
            </div> */}
            {renderBarContent()}
            {
                toggleMenu ?
                <SliderMenu setToggleMenu={setToggleMenu} />
                :
                null
            }
        </div>
    );
}

export default NavBar