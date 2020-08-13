import React, { Component } from 'react';
import UserContext from '../../Context';
import styles from './index.module.css';

class ProfilePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: null,
            articles: null,
            articlesCount: null
        }
    }

    static contextType = UserContext;

    componentDidMount() {
        this.getUser(this.props.match.params.id)
    }

    getUser = async (id) => {
        const promise = await fetch(`http://localhost:8080/api/user/profile?id=${id}`);
        const user = await promise.json();

        if (!promise.ok) {
            this.props.history.push('/error')
        }

        this.setState({
            username: user.username,
            articles: user.likedArticles,
            articlesCount: user.likedArticles && user.likedArticles.length,
        })
    }

    logout = () => {
        this.context.logout();
        this.props.history.push('/')
    }

    render() {
        const { username, articles, articlesCount } = this.state;

        if (!username) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div className={styles["wrapper"]}>
                <div className={styles["left"]}>
                    <img src="https://images.unsplash.com/photo-1597177331064-2990be8887fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="user" width="100" />
                    <h4>Username {username}
                    </h4>
                    <button className={styles["logout-btn"]} onClick={this.logout}>Logout</button>
                </div>
                <div className={styles["right"]}>
                    <div className={styles["articles"]}>
                        <h3>Liked Articles {articlesCount}</h3>

                        <ul>
                            {
                                articles.map((link, index) => (
                                    <li key={index}>
                                        <a href="#">{link.title}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </div>

        )
    }
}

export default ProfilePage;