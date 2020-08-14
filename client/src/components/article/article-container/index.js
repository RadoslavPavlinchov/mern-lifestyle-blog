import React, { useState, useCallback, useEffect } from 'react';
import styles from './index.module.css';
import ArticleSingle from '../article-single';
import Sidebar from '../article-sidebar/article-sidebar-wrapper';
import _getArticles from '../../../utils/getArticles';

const ArticleContainer = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = useCallback(async () => {
        const articles = await _getArticles();
        setArticles(articles);
    }, []);

    useEffect(() => {
        getArticles();
    }, [getArticles])

    const renderArticles = () => {
        return articles.map((article, index) => {
            return (
                <ArticleSingle
                    key={index}
                    image={article.image}
                    title={article.title}
                    creator={article.creator.username}
                    createdAt={article.createdAt}
                    category={article.category}
                    article={article.article}
                    id={article._id}
                />
            )
        })
    }

    return (
        <section className={styles.container}>
            <div className={styles['site-content']}>
                <div className={styles.posts}>

                    {
                        renderArticles()
                    }

                    <hr />
                    <div className={styles['pagination']}>
                        <a href="#">left arrow</a>
                        <a href="#" className={styles.pages}>1</a>
                        <a href="#" className={styles.pages}>2</a>
                        <a href="#" className={styles.pages}>3</a>
                        <a href="#">right arrow</a>
                    </div>
                </div>

                <Sidebar articles={articles} />

            </div>
        </section>
    )
}

export default ArticleContainer;