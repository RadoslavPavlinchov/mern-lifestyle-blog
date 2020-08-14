import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Popular = ({ image, title, id }) => {
    return (
        <div className={styles["small-popular-posts"]}>
            <div className={styles["small-post-content"]}>
                <div className={styles["small-post-image"]}>
                    <div>
                        <Link to={{
                            pathname: `/article/details/${id}`
                        }}>
                            <img src={image} alt="blog" className={styles["img"]} />
                        </Link>
                    </div>
                </div>
                <div className={styles["small-post-title"]}>
                    <Link to={{
                        pathname: `/article/details/${id}`
                    }}>
                        {title}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Popular;