import { useEffect, useState } from 'react';

const UserFunction = ({ name, location, contact }) => {
    //console.log(name, location, contact);
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    //console.log('render');
    useEffect(() => {
        //console.log('useEffect');

        return () => {
            //console.log('useEffect return');
        };
    });
    return (
        <div className="user-details">
            <div className="count">{count}</div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increment count
            </button>
            <div className="count">{count2}</div>
            <button
                onClick={() => {
                    setCount2(count2 + 1);
                }}
            >
                Increment count 2
            </button>
            <div className="name">Amandeep Singh</div>
            <div className="location">Pune</div>
            <div className="contact">amandeepsaluja25@gmail.com</div>
        </div>
    );
};

export default UserFunction;
