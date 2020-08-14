import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <h2 className={styles.title}>404</h2>
                <p className={styles.error}>Page Not Found</p>
                <hr></hr>
                <p className={styles['error-message']}>Sorry, the page that you are searching is not here</p>
                <Link to='/' className={styles.btn}>Go Back</Link>
            </div>
        </div>
    )
}

export default NotFound;