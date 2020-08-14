import React from 'react';
import styles from './index.module.css'

const Newsletter = () => {
    return (
        <div className={styles.newsletter}>
            <h2>Newsletter</h2>
            <div className={styles['form-element']}>
                <input type="text" className={styles['input-element']} placeholder="Email"/>
                <button className={styles['btn-1', 'form-btn']}>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter;