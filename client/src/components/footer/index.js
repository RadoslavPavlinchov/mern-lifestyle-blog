import React from 'react';
import styles from './index.module.css';
import Newsletter from '../article/article-sidebar-newsletter';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-container']}>
                <div className={styles['about-us']}>
                    <h2>About Us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloribus non cumque animi nostrum laborum libero eligendi maxime excepturi culpa!</p>
                </div>
                <div className={styles.newsletter}>
                    <Newsletter />
                </div>
                <div className={styles.instagram}>
                    <h2>Instagram</h2>
                    <div className="flex-row">
                        <img src="https://images.unsplash.com/photo-1594949397838-98d5c2ad5561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                        <img src="https://images.unsplash.com/photo-1594949397838-98d5c2ad5561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                        <img src="https://images.unsplash.com/photo-1594949397838-98d5c2ad5561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                    </div>
                    <div className="flex-row">
                        <img src="https://images.unsplash.com/photo-1594949397838-98d5c2ad5561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                        <img src="https://images.unsplash.com/photo-1594949397838-98d5c2ad5561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                        <img src="https://images.unsplash.com/photo-1594949397838-98d5c2ad5561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="i1" />
                    </div>
                </div>
                <div className={styles['follow-us']}>
                    <h2>Follow Us</h2>
                    <p>Social Media</p>
                    <div>
                        <h3>facebook</h3>
                        <h3>twitter</h3>
                        <h3>instagram</h3>
                        <h3>youtube</h3>
                    </div>
                </div>
            </div>
            <div className={styles.rights}>
                <h4>Copyright 2020 All rights reserved | made with {`<3`} by Radoslav Pavlinchov</h4>
            </div>
        </footer>
    )
}

export default Footer;