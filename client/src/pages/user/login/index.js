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

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)

        // fetch().then().catch()
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className={styles.total}>
                <div className={styles.cont}>
                    <div className={styles.form}>
                        <h2>Sign In</h2>

                        <form onSubmit={this.handleSubmit}>
                            <Input
                                id='email'
                                label='Email'
                                type='email'
                                onChange={(e) => { this.onChange(e, 'email') }}
                                value={email}
                            />
                            <Input
                                id='password'
                                label='Password'
                                type='password'
                                onChange={(e) => { this.onChange(e, 'password') }}
                                value={password}
                            />
                            <button className={styles.submit} type="submit">Login</button>
                        </form>

                        <p className={styles['forgot-pass']}>Forgot Password ?</p>

                        <div className={styles['social-media']}>
                            <ul>
                                <li>F</li>
                                <li>T</li>
                                <li>I</li>
                                <li>P</li>
                            </ul>
                        </div>

                        <div className={styles['sub-cont']}>
                            <div className={styles.img}>
                                <div className={styles['img-text']}>
                                    <h2>New here?</h2>
                                    <p>Sign up and discover the great articles!</p>
                                </div>
                                <div className={styles['img-btn']}>
                                    <span className={styles['m-up']}>Register</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default LoginPage;