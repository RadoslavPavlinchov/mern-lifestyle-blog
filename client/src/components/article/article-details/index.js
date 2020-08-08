import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

const ArticleDetails = (props) => {

    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [creator, setCreator] = useState('');
    const [createdAt, setCreatedAt] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/api/article/details/${props.match.params.id}`)
            .then((res) => {
                return res.json();
            })
            .then((article) => {
                setTitle(article.title);
                setArticle(article.article);
                setImage(article.image);
                setCategory(article.category);
                setCreator(article.creator);
                setCreatedAt(article.createdAt);

            })
    }, [props])

    return (
        <div className={styles['post-content']}>
            <div className={styles['post-image']}>
            <h2>{title}</h2>
                <div>
                    <img src={image} alt="blog" className={styles.img} />
                </div>
                <div className={styles['post-info']}>
                    <span>Article By: {creator.username}</span>
                    <span>Created: {createdAt}</span>
                    <span>Category: {category}</span>
                    {/* <span>2 Comments</span>
                    <span>2 Likes</span> */}
                </div>
            </div>
            <div className={styles['post-title']}>
                <p>{article}</p>
            </div>
        </div>
    )
}

export default ArticleDetails;