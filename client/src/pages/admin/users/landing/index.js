import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
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

                <div className={styles['button-group']}>
                    <Link to="/admin/user/create" className={styles['btn-big']}>Create User</Link>
                </div>

                <div className={styles.content}>
                    <h2 className={styles['page-title']}>Manage Users</h2>

                    <table>
                        <thead>
                            <th>N</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th colSpan="2">Action</th>
                        </thead>

                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>Test</td>
                                <td>test@test.com</td>
                                <td>admin</td>
                                <td><Link to="/" className={styles.edit}>Edit</Link></td>
                                <td><Link to="/" className={styles.delete}>Delete</Link></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Author</td>
                                <td>rado@test.com</td>
                                <td>author</td>
                                <td><Link to="/" className={styles.edit}>Edit</Link></td>
                                <td><Link to="/" className={styles.delete}>Delete</Link></td>
                            </tr>

                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}

export default ManageUsers;