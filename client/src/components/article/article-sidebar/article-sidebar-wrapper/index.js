import React from 'react';
import Popular from '../article-sidebar-popular';

const Sidebar = ({ articles }) => {

    const sortedArticles = articles.sort((a, b) => {
        return b.likes.length - a.likes.length
    })

    const renderArticles = () => {
        return sortedArticles.map((article, index) => {
            console.log()
            return (
                <Popular
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
        <aside className="sidebar">

            <h2>Popular posts</h2>
            {
                renderArticles()
            }

        </aside>
    )
}

export default Sidebar;