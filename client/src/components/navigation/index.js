import React from 'react';
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    },
    {
        title: 'Register',
        path: '/register'
    }
];

const socialLinks = [
    {
        type: "fab",
        code: "facebook"
    },
    {
        type: "fab",
        code: "twitter"
    },
    {
        type: "fab",
        code: "instagram"
    },
    {
        type: "fab",
        code: "linkedin"
    },
]

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            {/* styles.flexRow COMBINES nav-menu and flex-row*/}
            <div className={styles.navMenu}>

                <div>
                    <a href="#" className={styles.brand}>Lifestyle</a>
                </div>

                <div>
                    <ul className={styles.navItems}>
                        {
                            navLinks.map((link, index) => (
                                <li key={index} className={styles.navLink}>
                                    <a href="#" className={styles.navAnchor}>{link.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className={styles.social}>
                    {
                        socialLinks.map((link, index) => (
                            <a href="#"
                                key={index}
                            >
                                <FontAwesomeIcon icon={[link.type, link.code]} className={styles.navIcon}/>
                            </a>
                        ))
                    }
                </div>

            </div>
        </nav>
    )
}

export default Navigation;