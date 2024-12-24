import './Header.css';
import LOGO from '../../assets/logo.webp';
import { Link } from 'react-router';
import { useContext, usecontext } from 'react';
import UserContext from '../../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="header">
            <div className="logo data">
                <img src={LOGO} alt="Foodie Logo" className="logo-img" />
            </div>
            <div className="home data">
                <Link to={'/'}>Home</Link>
            </div>
            <div className="search data">Search</div>
            <div className="contact data">
                <Link to={'/contact'}>Contact</Link>
            </div>
            <div className="help data">
                <Link to={'/help'}>Help</Link>
            </div>
            <div className="sign-in data">Sign In</div>
            <div className="cart data">
                <Link to={'/cart'}>Cart ({cartItems.length} items)</Link>
            </div>
            {loggedInUser && <div className="user-name">{loggedInUser}</div>}
        </div>
    );
};

export default Header;