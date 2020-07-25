import React, { Component } from 'react';

class UserState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            user: null
        }
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user
        })
    }

    logout = () => {
        this.setState({
            loggedIn: false,
            user: null
        })
    }

    render() {
        return this.props.children;
    }
}

export default UserState;