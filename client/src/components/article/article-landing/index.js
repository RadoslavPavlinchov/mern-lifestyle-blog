import React, { Component } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom';

class ArticleLanding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: []
        }
    }

    getArticles = async () => {
        // const { length } = this.props
        const promise = await fetch(`http://localhost:8080/api/article/all`)  //const promise = await fetch(`http://localhost:8080/api/article?length=${length}`)
        const articles = await promise.json()

        this.setState({
            articles
        })
    }

    renderArticles() {
        const { articles } = this.state;

        return articles.map((article, index) => {
            if (index === 0 || index === 3) {
                return (
                    <Link to={{
                        pathname: `/article/details/${article._id}`
                    }} key={index}>
                        <div className={styles["index-boxlink-rectangle"]}>
                            <img src={article.image} alt="a" />
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </div>
                    </Link>
                )
            }

            return (
                <Link to={{
                    pathname: `/article/details/${article._id}`
                }} key={index}>
                    <div className={styles["index-boxlink-square"]}>
                        <img src={article.image} alt="a" />
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </div>
                </Link>
            )
        })
    }

    componentDidMount() {
        this.getArticles();
    }

    render() {
        return (
            <div className={styles["wrapper"]}>
                <section className={styles["index-links"]}>
                    {this.renderArticles()}
                </section>
            </div>
        )
    }
}

export default ArticleLanding;