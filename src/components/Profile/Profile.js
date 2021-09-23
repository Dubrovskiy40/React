import { BrowserRouter as Router } from "react-router-dom";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

const Profile = () => {

    return (
        <div>
            <Router>
                <div>Аватар</div>
                <div>
                    <h3>ФИО</h3>
                    <p></p>
                </div>
                <div>
                    <h3>Возраст</h3>
                    <p></p>
                </div>
                <div>
                    <h3>Город</h3>
                    <p></p>
                </div>
                <div>
                    <h3>Пол</h3>
                    <p></p>
                </div>
                <p>Описание</p>
            </Router>
        </div>
    )
}
export default Profile;