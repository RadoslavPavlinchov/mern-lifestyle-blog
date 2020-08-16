import React from 'react';
import styles from './index.module.css'
import SubmitButton from '../../../submit-btn'

const Newsletter = () => {
    const sub = () => {
        console.log('sub')
    }
    return (
        <div className={styles.newsletter}>
            <h2>Newsletter</h2>
            <div className={styles['form-element']}>
                <input type="text" className={styles['input-element']} placeholder="Email"/>
                <SubmitButton title='Subscribe' onClick={sub}/>
            </div>
        </div>
    )
}

export default Newsletter;