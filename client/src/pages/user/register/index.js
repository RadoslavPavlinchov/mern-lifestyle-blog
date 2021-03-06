import React, { Component } from 'react';
import styles from './index.module.css';
import Input from '../../../components/input';
import authenticate from '../../../utils/authenticate';
import UserContext from '../../../Context';
import { Link } from 'react-router-dom';

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            rePassword: '',
            usernameError: false,
            passwordError: false,
            rePasswordError: false,
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

        const { 
            usernameError, 
            passwordError, 
            rePasswordError, 
            username, 
            password, 
            rePassword 
        } = this.state;

        if (usernameError || passwordError || rePasswordError) {
            console.log('There is an error')
            return;
        }

        authenticate('http://localhost:8080/api/user/register', {
            username,
            password,
            rePassword
        }, (user) => {
            this.context.login(user);
            this.props.history.push('/')
        }, (err) => {
            console.log(err)
        });
    }

    handleUsernameBlur = () => {
        const { username } = this.state;

        if (username.length < 3) {
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
        if (password.length < 6) {
            this.setState({
                passwordError: true
            })
        } else if (this.state.passwordError) {
            this.setState({
                passwordError: false
            })
        }
    }

    handleRePasswordBlur = () => {
        const { password, rePassword } = this.state
        if (password !== rePassword) {
            this.setState({
                rePasswordError: true
            })
        } else if (this.state.rePasswordError) {
            this.setState({
                rePasswordError: false
            })
        }
    }

    render() {
        const {
            username,
            password,
            rePassword,
            usernameError,
            passwordError,
            rePasswordError,
            submitBtnDisabled
        } = this.state;

        return (

            <div className={styles.total}>
                <div className={styles.cont}>
                    <div className={styles.form}>
                        <h2>Sign Up</h2>

                        <form onSubmit={this.handleSubmit}>

                            <Input
                                id='username'
                                label='username'
                                type='text'
                                onChange={(event) => { this.onChange(event, 'username') }}
                                onBlur={this.handleUsernameBlur}
                                value={username}
                                error={usernameError}
                            />

                            {usernameError ? (<span className={styles.err}>The username should be at least 3 characters!</span>) : null}

                            <Input
                                id='password'
                                label='Password'
                                type='password'
                                onChange={(event) => { this.onChange(event, 'password') }}
                                onBlur={this.handlePasswordBlur}
                                value={password}
                                error={passwordError}
                            />

                            {passwordError ? (<span className={styles.err}>The password must be at least 6 characters</span>) : null}

                            <Input
                                id='re-password'
                                label='Confirm Password'
                                type='password'
                                onChange={(event) => { this.onChange(event, 'rePassword') }}
                                onBlur={this.handleRePasswordBlur}
                                value={rePassword}
                                error={rePasswordError}
                            />

                            {rePasswordError ? (<span className={styles.err}>Passwords do not match</span>) : null}

                            <button disabled={submitBtnDisabled} className={styles.submit} type="submit">Register</button>

                        </form>

                        <p className={styles['forgot-pass']}>Forgot Password ?</p>
                        <div className={styles['sub-cont']}>
                            <div className={styles.img}>
                                <div className={styles['img-text']}>
                                    <h2>One of us</h2>
                                    <p>If you already have an account, just login.</p>
                                    <Link to={'/login'}>Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage;