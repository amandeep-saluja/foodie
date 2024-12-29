import About from '../About/About';
import UserClass from '../UserClass/UserClass';
import UserFunction from '../UserFunction/UserFunction';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact flex flex-col items-center">
            <h2 className="label font-bold text-4xl my-4">Contact</h2>
            <div className="form flex flex-col w-4/12 my-4 text-2xl bg-slate-200 p-10 rounded-lg">
                <div className="field-name w-full flex flex-row justify-between">
                    <label>Name: </label>
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        className="text-black outline-none"
                    />
                </div>
                <div className="field-msg w-full flex flex-row justify-between mt-6">
                    <label>Message:</label>
                    <input
                        type="email"
                        placeholder="Enter your Message"
                        className="text-black outline-none"
                    />
                </div>
                <button className="bg-black text-white mt-6 rounded-lg w-40 self-center py-2">
                    Submit
                </button>
            </div>
            {/* 
            <hr></hr>
            <h1>User function</h1>
            <UserFunction
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

            {/* <About />
            <UserFunction /> */}
        </div>
    );
};

export default Contact;
