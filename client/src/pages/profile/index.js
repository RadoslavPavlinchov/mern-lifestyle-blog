import React, { Component } from 'react'

class ProfilePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: null,
            articles: null
        }
    }

    componentDidMount() {
        this.getUser(this.props.match.params.id)
    }

    getUser = async (id) => {
        const promise = await fetch(`http://localhost:8080/api/user/profile?id=${id}`);
        const user = await promise.json();

        if(!promise.ok) {
            this.props.history.push('/error')
        }

        this.setState({
            username: user.username,
            articles: user.createdArticles && user.createdArticles.length
        })
    }

    render() {
        const { username, articles } = this.state;

        if(!username) {
            return(
                <div>Loading...</div>
            )
        }

        return (
            <div>
                <p>Username: {username}</p>
                <p>Articles: {articles}</p>
            </div>
        )
    }
}

export default ProfilePage;