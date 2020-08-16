import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const ArticleSingle = ({ image, title, creator, createdAt, category, article, id }) => {

    return (
        <div className={styles['post-content']}>
            <div className={styles['post-image']}>
                <div>
                    <img src={image} alt="blog" className={styles.img} />
                </div>

                <div className={styles['post-info']}>
                    <span>Article By: {creator}</span>
                    <span>Created: {(new Date(createdAt)).toDateString()}</span>
                    <span>Category: {category}</span>
                </div>

            </div>
            <div className={styles['post-title']}>
                <h2>{title}</h2>
                <p>{`${article.substr(0, 200)}...`}</p>
                <button className={styles['post-btn']}>
                    <Link to={{
                        pathname: `/article/details/${id}`
                    }}>
                        Read More
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default ArticleSingle;