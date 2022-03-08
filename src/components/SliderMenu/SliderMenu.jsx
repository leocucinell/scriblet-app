import "./SliderMenu.css";
import { useDispatch } from "react-redux";
import { removeStudent } from "../../features/currentStudentSlice";
import { useNavigate } from "react-router";

const SliderMenu = ({setToggleMenu}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(removeStudent());
        localStorage.removeItem("ScribletCurrentStudent");
        setToggleMenu(false);
        navigate("/");
    }

    const handleAccount = () => {
        navigate('/account');
        setToggleMenu(false);
    }

    return(
        <div className="SliderMenu-container">
            <div className="SliderMenu-gray-curtian"></div>
            <div className="SliderMenu-options-list">
                <ul className="SliderMenu-ul">
                    <li onClick={handleAccount} className="SliderMenu-li">
                        <h1>Account</h1>
                    </li>
                    <li className="SliderMenu-li">
                        <h1>About</h1>
                    </li>
                    <li onClick={handleLogout} className="SliderMenu-li">
                        <h1>Log out</h1>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SliderMenu;