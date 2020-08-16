import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const ManageCategories = () => {
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
                    <Link to="/admin/category/create" className={styles['btn-big']}>Create Category</Link>
                </div>

                <div className={styles.content}>
                    <h2 className={styles['page-title']}>Manage Categories</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>N</th>
                                <th>Name</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Life</td>
                                <td><Link to="/" className={styles.edit}>Edit</Link></td>
                                <td><Link to="/" className={styles.delete}>Delete</Link></td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Tech</td>
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

export default ManageCategories;