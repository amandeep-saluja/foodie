import './Footer.css';
import LOGO from '../../assets/logo.webp';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={LOGO} alt="LOGO" className="logo" />
            </div>
            <div className="copyright-msg">
                @2024 All rights are reserved with Foodie Limited
            </div>
            <div className="links">Help & Support</div>
        </div>
    );
};

export default Footer;
