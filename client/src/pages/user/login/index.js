import React, { Component } from 'react';
import styles from './index.module.css';
import Input from '../../../components/input';
import authenticate from '../../../utils/authenticate';
import UserContext from '../../../Context';
import { Link } from 'react-router-dom';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            usernameError: false,
            passwordError: false,
            submitBtnDisabled: true
        }
    }

    static contextType = UserContext;

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);

        if (this.state.username !== '' && this.state.password !== '' && this.state.rePassword !== '') {
            this.setState({
                submitBtnDisabled: false
            })
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { username, usernameError, password, passwordError } = this.state;

        if (usernameError || passwordError) {
            console.log('There is an error')
            return;
        }

        authenticate('http://localhost:8080/api/user/login', {
            username,
            password
        }, (user) => {
            this.context.login(user);
            this.props.history.push('/');
        }, (err) => {
            console.log(err);
        });
    }

    handleUsernameBlur = () => {
        const { username } = this.state;

        if (!username) {
            this.setState({
                usernameError: true
            })
        } else if (this.state.usernameError) {
            this.setState({
                usernameError: false
            })
        }
    }

    handlePasswordBlur = () => {
        const { password } = this.state
        if (!password) {
            this.setState({
                passwordError: true
            })
        } else if (this.state.passwordError) {
            this.setState({
                passwordError: false
            })
        }
    }

    render() {
        const { username, usernameError, password, passwordError } = this.state;

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
                                onBlur={this.handleUsernameBlur}
                                value={username}
                                error={usernameError}
                            />
                            {usernameError ? (<span className={styles.err}>The username should not be empty</span>) : null}

                            <Input
                                id='password'
                                label='Password'
                                type='password'
                                onChange={(e) => { this.onChange(e, 'password') }}
                                onBlur={this.handlePasswordBlur}
                                value={password}
                                error={passwordError}
                            />
                            {passwordError ? (<span className={styles.err}>The password must not be empty</span>) : null}

                            <button className={styles.submit} type="submit">Login</button>
                        </form>

                        <p className={styles['forgot-pass']}>Forgot Password ?</p>

                        <div className={styles['sub-cont']}>
                            <div className={styles.img}>
                                <div className={styles['img-text']}>
                                    <h2>New here?</h2>
                                    <p>Sign up and discover the great articles!</p>
                                    <Link to={'/register'}>Register</Link>
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