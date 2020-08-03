import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className={styles['admin-wrapper']}>

            <div className={styles['left-sidebar']}>
                <ul>
                    <li><Link to="/admin/articles" className={styles.brand}>Articles</Link></li>
                    <li><Link to="/admin/users" className={styles.brand}>Users</Link></li>
                    <li><Link to="/admin/categories" className={styles.brand}>Categories</Link></li>
                </ul>
            </div>

            <div className={styles['admin-content']}>


            </div>

        </div>
    )
}

export default AdminDashboard;