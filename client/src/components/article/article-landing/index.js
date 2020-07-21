import React, { Component } from 'react'
import './index.css'
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
                    <Link to="/article/details/1" key={index}>
                        <div className="index-boxlink-rectangle">
                            <img src={article.imageUrl} alt="a" />
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </div>
                    </Link>
                )
            }

            return (
                <Link to="/article/details/1" key={index}>
                    <div className="index-boxlink-square">
                        <img src={article.imageUrl} alt="a" />
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
            <div className="wrapper">
                <section className="index-links">
                    {this.renderArticles()}
                </section>
            </div>
        )
    }
}

export default ArticleLanding;