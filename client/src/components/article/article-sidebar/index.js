import React from 'react';
import './index.css';
import Category from '../article-sidebar-category';
import Popular from '../article-sidebar-popular';
import Newsletter from '../article-sidebar-newsletter';
import Tag from '../article-sidebar-tag';

const Sidebar = () => {


    return (
        <aside className="sidebar">

            <Category />
            <Popular />
            <Newsletter />
            <Tag />

        </aside>
    )
}

export default Sidebar;