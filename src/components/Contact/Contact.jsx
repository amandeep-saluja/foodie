import About from '../About/About';
import UserClass from '../UserClass/UserClass';
import UserFunction from '../UserFunction/UserFunction';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="label">Contact</div>
            <hr></hr>
            <h1>User function</h1>
            {/* <UserFunction
                name={'Amandeep Singh'}
                location={'Pune'}
                contact={'amandeepsaluja25@gmail.com'}
            />
            <hr></hr>
            <h1>User class</h1>
            <UserClass
                name={'Amandeep Singh'}
                location={'Pune'}
                contact={'amandeepsaluja25@gmail.com'}
            /> */}

            <About />
            <UserFunction />
        </div>
    );
};

export default Contact;
