import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props.name + ' Child :: constructor');
        // console.log(props.name, props.location, props.contact);
        this.state = {
            count: 0,
            count2: 2,
        };
    }

    render() {
        //console.log(this.props.name + ' Child :: render');
        const { name, location, contact } = this.props;
        const { count, count2 } = this.state;
        return (
            <div className="user-details">
                <div className="count">{count}</div>
                <button
                    onClick={() => {
                        this.setState({
                            count: count + 1,
                        });
                    }}
                >
                    Increment count
                </button>
                <div className="count">{count2}</div>
                <button
                    onClick={() => {
                        this.setState({
                            count2: count2 + 1,
                        });
                    }}
                >
                    Increment count2
                </button>
                <div className="name">{name}</div>
                <div className="location">{location}</div>
                <div className="contact">{contact}</div>
            </div>
        );
    }

    componentDidMount() {
        //console.log(this.props.name + ' Child :: API call');
        //console.log(this.props.name + ' Child :: componentDidMount');
    }

    componentDidUpdate() {
        //console.log('Child :: componentDidUpdate');
    }

    componentWillUnmount() {
        //console.log('Child :: componentWillUnmount');
    }

    /*shouldComponentUpdate() {
        console.log('Child :: shouldComponentUpdate');
        return false;
    }*/
}

export default UserClass;
