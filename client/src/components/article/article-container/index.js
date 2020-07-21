import React from 'react';
import styles from './index.module.css';
import ArticleSingle from '../article-single';
import Sidebar from '../article-sidebar';

const ArticleContainer = () => {
    return (
        <section className={styles.container}>
            <div className={styles['site-content']}>
                <div className={styles.posts}>

                    <ArticleSingle />

                    <hr />
                    <div className={styles['pagination']}>
                        <a href="#">left arrow</a>
                        <a href="#" className={styles.pages}>1</a>
                        <a href="#" className={styles.pages}>2</a>
                        <a href="#" className={styles.pages}>3</a>
                        <a href="#">right arrow</a>
                    </div>
                </div>

                <Sidebar />
                
            </div>
        </section>
    )
}

export default ArticleContainer;