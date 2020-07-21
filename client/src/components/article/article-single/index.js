import React from 'react';
import styles from './index.module.css';

const ArticleSingle = () => {

    return (
        <div className={styles['post-content']}>
            <div className={styles['post-image']}>
                <div>
                    <img src="https://images.unsplash.com/photo-1594643551111-29af420564e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="blog" className={styles.img} />
                </div>
                <div className={styles['post-info']}> 
                    <span>User</span>
                    <span>Calendar</span>
                    <span>2 Comments</span>
                </div>
            </div>
            <div className={styles['post-title']}>
                <a href="#">Title Hello link</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quis sint. Nesciunt eos quam, accusamus quibusdam cum beatae mollitia eaque reprehenderit quasi totam sint, cupiditate aperiam sit blanditiis. Praesentium, fugiat.</p>
                <button className={styles['post-btn']}>Details</button>
            </div>
        </div>
    )
}

export default ArticleSingle;