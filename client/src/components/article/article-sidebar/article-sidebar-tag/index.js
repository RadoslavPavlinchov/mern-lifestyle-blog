import React from 'react';
import styles from './index.module.css';

const Tag = () => {
    return (
        <div className={styles["all-tags"]}>
            <h2>Tags</h2>
            <div className={styles["tags flex-row"]}>
                <span className="tag">#lifestyle</span>
                <span className="tag">#lifestyle</span>
                <span className="tag">#lifestyle</span>
            </div>
        </div>
    )
}

export default Tag;