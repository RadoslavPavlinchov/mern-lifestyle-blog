import React, { Component } from 'react';
import styles from './index.module.css';
import Input from '../../../components/input';

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            rePassword: ''
        }
    }

    onChange = (event, type) => {
        const newState = {};

        newState[type] = event.target.value;

        this.setState(newState);
    }

    render() {
        const { email, password, rePassword } = this.state;

        return (
            <div>
                <p>Register Page</p>
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
                <Input
                    id='re-password'
                    label='Repeat Password:'
                    onChange={(e) => { this.onChange(e, 'email') }}
                    value={rePassword}
                />
            </div>
        )
    }
}

export default RegisterPage;