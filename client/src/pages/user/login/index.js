import React, { Component } from 'react';
import styles from './index.module.css';
import Input from '../../../components/input';
import authenticate from '../../../utils/authenticate';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { username, password } = this.state;

        authenticate('http://localhost:8080/api/user/login', {
            username,
            password
        }, () => {
            console.log('You are logged in');
            this.props.history.push('/')
        }, (err) => {
            console.log(err)
        });

        // try {

        //     const promise = await fetch('http://localhost:8080/api/user/login', {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             username,
        //             password
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     })

        //     const authToken = promise.headers.get('Authorization');
        //     document.cookie = `x-auth-token=${authToken}`;

        //     const response = await promise.json();

        //     if (response.username && authToken) {
        //         this.props.history.push('/')
        //     }

        // } catch (error) {
        //     console.log(error)
        // }


    }

    render() {
        const { username, password } = this.state;

        return (
            <div className={styles.total}>
                <div className={styles.cont}>
                    <div className={styles.form}>
                        <h2>Sign In</h2>

                        <form onSubmit={this.handleSubmit}>
                            <Input
                                id='username'
                                label='Username'
                                type='text'
                                onChange={(e) => { this.onChange(e, 'username') }}
                                value={username}
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