import RestaurantContainer from '../RestaurantContainer/RestaurantContainer';
import './Body.css';
import UserContext from '../../utils/UserContext';
import { useContext } from 'react';

const Body = () => {
    const { loggedInUser, setUserInfo } = useContext(UserContext);
    return (
        <div className="body">
            <div className="user-input">
                <div className="label">User Name:</div>
                <input
                    type="text"
                    className="user-info"
                    value={loggedInUser}
                    onChange={(e) => setUserInfo(e.target.value)}
                />
            </div>
            <RestaurantContainer />
        </div>
    );
};

export default Body;
