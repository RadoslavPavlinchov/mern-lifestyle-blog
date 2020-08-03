import React from 'react';
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const CreateCategory = () => {
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
                    <h2 className={styles['page-title']}>Create Category</h2>

                    <form>
                        <div>
                            <label>Name</label>
                            <input type="text" name="Name" className={styles['text-input']} />
                        </div>

                        <div>
                            <label>Description</label>
                            <textarea name="body" id="body" cols="50" rows="10"></textarea>
                        </div>

                        <div>
                            <button type="submit" className={styles['btn-big']}>Create Category</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default CreateCategory;