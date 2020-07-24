import React, { Component } from 'react';
import styles from './index.module.css';
import Input from '../../../components/input';

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            rePassword: '',
            emailError: false,
            passwordError: false,
            rePasswordError: false,
            submitBtnDisabled: true
        }
    }

    onChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);

        if (this.state.email !== '' && this.state.password !== '' && this.state.rePassword !== '') {
            this.setState({
                submitBtnDisabled: false
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { emailError, passwordError, rePasswordError } = this.state

        if (emailError, passwordError, rePasswordError) {
            console.log('There is an error')
            return;
        }

        console.log('Hello, you are in')
        // fetch().then().catch()
    }

    handleEmailBlur = () => {
        if (!this.state.email.includes('@')) {
            this.setState({
                emailError: true
            })
        } else if (this.state.emailError) {
            this.setState({
                emailError: false
            })
        }

        // Add the validation
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
        if(password !== rePassword) {
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
            email,
            password,
            rePassword,
            emailError,
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
                                id='email'
                                label='Email'
                                type='email'
                                onChange={(event) => { this.onChange(event, 'email') }}
                                onBlur={this.handleEmailBlur}
                                value={email}
                                error={emailError}
                            />

                            {emailError ? (<span className={styles.err}>This is not a valid email!</span>) : null}

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
                                    <h2>One of us</h2>
                                    <p>If you already have an account, just login.</p>
                                </div>
                                <div className={styles['img-btn']}>
                                    <span className={styles['m-in']}>Login</span>
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