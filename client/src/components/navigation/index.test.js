import React from 'react';
import styles from './index.module.css'
import renderer from 'react-test-renderer';
import Navigation from '.';
import UserContext from '../../Context';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialLinks from '../../utils/social-links';

describe('Navigation Component', () => {
    it('should render authenticated routes', () => {
        const socLinks = socialLinks();
        const tree = renderer.create(
            <BrowserRouter>
                <Route>
                    <UserContext.Provider value={{
                        user: {
                            loggedIn: true,
                            id: '123456789'
                        }
                    }}>
                        <Navigation>
                            {
                                socLinks.map((link, index) => (
                                    <Link to='/'
                                        key={index}
                                    >
                                        <FontAwesomeIcon icon={[link.type, link.code]} className={styles.navIcon} />
                                    </Link>
                                ))
                            }
                        </Navigation>
                    </UserContext.Provider>
                </Route>
            </BrowserRouter>

        ).toJSON();
        expect(tree).toMatchSnapshot()
    })

    // it('should render authenticated routes', () => {

    // })
})