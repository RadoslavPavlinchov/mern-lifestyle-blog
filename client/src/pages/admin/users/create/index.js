import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const CreateUser = () => {
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

                <div className={styles.content}>
                    <h2 className={styles['page-title']}>Create User</h2>

                    <form>
                        <div>
                            <label>Username</label>
                            <input type="text" name="username" className={styles['text-input']} />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name="email" className={styles['text-input']} />
                        </div>

                        <div>
                            <label>Password</label>
                            <input type="text" name="Name" className={styles['text-input']} />
                        </div>

                        <div>
                            <label>Confirm Password</label>
                            <input type="text" name="Name" className={styles['text-input']} />
                        </div>

                        <div>
                            <label>Role</label>
                            <select name="role" className={styles['text-input']}>
                                <option value="admin">admin</option>
                                <option value="author">author</option>
                            </select>
                        </div>

                        <div>
                            <button type="submit" className={styles['btn-big']}>Create User</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default CreateUser;