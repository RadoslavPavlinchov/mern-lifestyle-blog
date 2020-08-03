import React from 'react';
import styles from './index.module.css'
import { Link } from 'react-router-dom';

const CreateArticle = () => {
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
                    <h2 className={styles['page-title']}>Create Article</h2>

                    <form>
                        <div>
                            <label>Title</label>
                            <input type="text" name="title" className={styles['text-input']} />
                        </div>

                        <div>
                            <label>Details</label>
                            <textarea name="body" id="body" cols="50" rows="10"></textarea>
                        </div>

                        <div>
                            <label>Image</label>
                            <input type="file" name="image" className={styles['text-input']} />
                        </div>

                        <div>
                            <label>Category</label>
                            <select name="category" className={styles['text-input']}>
                                <option value="Life">Life</option>
                                <option value="Tech">Tech</option>
                                <option value="Hiking">Hiking</option>
                            </select>
                        </div>

                        <div>
                            <button type="submit" className={styles['btn-big']}>Create Article</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default CreateArticle;