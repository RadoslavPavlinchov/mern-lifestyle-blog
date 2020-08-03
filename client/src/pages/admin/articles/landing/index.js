import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const ManageArticles = () => {
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
                    <Link to="/admin/article/create" className={styles['btn-big']}>Create Article</Link>
                </div>

                <div className={styles.content}>
                    <h2 className={styles['page-title']}>Manage Articles</h2>

                    <table>
                        <thead>
                            <th>N</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th colSpan="3">Action</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>This is the first article</td>
                                <td>Radoslav Pavlinchov</td>
                                <td><Link to="/" className={styles.edit}>Edit</Link></td>
                                <td><Link to="/" className={styles.delete}>Delete</Link></td>
                                <td><Link to="/" className={styles.publish}>Publish</Link></td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>This is the second article</td>
                                <td>Hancho Hanchovski</td>
                                <td><Link to="/" className={styles.edit}>Edit</Link></td>
                                <td><Link to="/" className={styles.delete}>Delete</Link></td>
                                <td><Link to="/" className={styles.publish}>Publish</Link></td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}

export default ManageArticles;