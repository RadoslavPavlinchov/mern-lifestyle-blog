import React from 'react';
import './index.css';
import ArticleSingle from '../article-single';
import Sidebar from '../article-sidebar';

const ArticleContainer = () => {
    return (
        <section className="container">
            <div className="site-content">
                <div className="posts">

                    <ArticleSingle />

                    <hr />
                    <div className="pagination flex-row">
                        <a href="#">left arrow</a>
                        <a href="#" className="pages">1</a>
                        <a href="#" className="pages">2</a>
                        <a href="#" className="pages">3</a>
                        <a href="#">right arrow</a>
                    </div>
                </div>

                <Sidebar />
            </div>
        </section>
    )
}

export default ArticleContainer;