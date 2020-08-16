import React, { useState, useCallback, useEffect } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import _getArticles from '../../../../utils/getArticles';

const ManageArticles = () => {
    const [articles, setArticles] = useState([]);

    const deleteArticle = (id) => {
        fetch(`http://localhost:8080/api/article/delete/${id}`)
            .then(() => {
                alert('The article has been deleted successfully!')
                setArticles(articles.filter(x => x._id !== id))
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getArticles = useCallback(async () => {
        const articles = await _getArticles();
        setArticles(articles);
    }, []);

    const renderArticles = () => {
        return articles.map((article, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{article.title}</td>
                    <td>{article.creator.username}</td>
                    <td><Link to={{
                        pathname: `/admin/article/edit/${article._id}`
                    }} className={styles.edit}>Edit</Link></td>
                    <td><Link to="#" onClick={() => deleteArticle(article._id)} className={styles.delete}>Delete</Link></td>
                </tr>
            )
        })
    }

    useEffect(() => {
        getArticles();
    }, [getArticles])

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
                            <tr>
                            <th>N</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th colSpan="3">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {renderArticles()}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}

export default ManageArticles;