import './LandingPage.css';
import MainButton from '../../components/MainButton/MainButton';

const LandingPage = () => {
    return(
        <div className="LandingPage-container">
            <div className="LandingPage-header">
                <img id="LandingPage-svg-background" alt="background-slide" src='landing-background.svg' />
                <div className="LandingPage-main-card">
                    <h2>Enhance your learning</h2>
                    <MainButton content="get started" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;