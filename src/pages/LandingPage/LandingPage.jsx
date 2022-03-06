import './LandingPage.css';
import MainButton from '../../components/MainButton/MainButton';

const LandingPage = () => {
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