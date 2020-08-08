import React, { Component } from 'react';
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import navigationLinks from '../../utils/navigation-links';
import socialLinks from '../../utils/social-links';
import UserContext from '../../Context';

class Navigation extends Component {

    static contextType = UserContext;

    render() {


        const socLinks = socialLinks();

        const { user } = this.context;

        const navLinks = navigationLinks(user);

        return (
            <nav className={styles.nav}>

                <div className={styles.navMenu}>

                    <div>
                        <Link to="/" className={styles.brand}>Lifestyle</Link>
                    </div>

                    <div>
                        <ul className={styles.navItems}>
                            {
                                navLinks.map((category, index) => (
                                    <li key={index} className={styles.navLink}>
                                        <Link to={category.link} className={styles.navAnchor}>{category.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    

                    <div className={styles.social}>
                        {
                            socLinks.map((link, index) => (
                                <Link to='/'
                                    key={index}
                                >
                                    <FontAwesomeIcon icon={[link.type, link.code]} className={styles.navIcon} />
                                </Link>
                            ))
                        }
                    </div>

                </div>
            </nav>
        )
    }
}

export default Navigation;