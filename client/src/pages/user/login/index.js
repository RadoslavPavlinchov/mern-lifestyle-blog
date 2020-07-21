import React, { Component } from 'react';
import styles from './index.module.css';
import Input from '../../../components/input';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <p>Login Page</p>
                <Input
                    id='email'
                    label='Email:'
                    onChange={(e) => { this.onChange(e, 'email') }}
                    value={email}
                />
                <Input
                    id='password'
                    label='Password:'
                    onChange={(e) => { this.onChange(e, 'password') }}
                    value={password}
                />
            </div>
        )
    }
}

export default LoginPage;