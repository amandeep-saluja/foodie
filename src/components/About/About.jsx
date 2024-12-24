import { Component } from 'react';
import UserClass from '../UserClass/UserClass';
import UserContext from '../../utils/UserContext';

class About extends Component {
    constructor(props) {
        super(props);
        //console.log('Parent :: constructor');
    }
    render() {
        //console.log('Parent :: render');
        return (
            <div className="about">
                <UserClass
                    name={'Amandeep'}
                    location={'Pune'}
                    contact={'6267301176'}
                />
                <div className="user">
                    LoggedIn User:
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserClass
                    name={'Elon Musk'}
                    location={'USA'}
                    contact={'112233'}
                />
            </div>
        );
    }

    componentDidMount() {
        //console.log('Parent :: API call');
        //console.log('Parent :: componentDidMount');

        const timer = setInterval(() => {
            console.log('Namaste React OP');
        }, 1000);
        this.timer = timer;
    }

    componentDidUpdate() {
        //console.log('Parent :: componentDidUpdate');
    }

    componentWillUnmount() {
        //console.log('Parent :: componentWillUnmount');
        clearInterval(this.timer);
    }

    /*shouldComponentUpdate() {
        console.log('Parent :: shouldComponentUpdate');
        return false;
    }*/
}

export default About;
