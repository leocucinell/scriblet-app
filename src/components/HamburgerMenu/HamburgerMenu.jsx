import "./HamburgerMenu.css";

const HamburgerMenu = ({handlehamburgerClick}) => {
    return(
        <div onClick={handlehamburgerClick} className="HamburgerMenu-container">
            <div id="HamburgerMenu-bar-1" className="HamburgerMenu-bar"></div>
            <div id="HamburgerMenu-bar-2" className="HamburgerMenu-bar"></div>
            <div id="HamburgerMenu-bar-3" className="HamburgerMenu-bar"></div>
        </div>
    );
}

export default HamburgerMenu