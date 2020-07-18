import React from 'react';
import './index.css';
import sidebarLinks from '../../../utils/sidebar-links';

const Category = () => {

    const links = sidebarLinks();

    return (
        <div className="category">
            <h2>Category</h2>
            <ul className="category-list">
                {
                    links.map((link, index) => (
                        <li className="list-items">
                            <a href="#">{link.title}</a>
                            <span>{link.count}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Category;