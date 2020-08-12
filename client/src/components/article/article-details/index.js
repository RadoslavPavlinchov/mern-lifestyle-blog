import React, { useState, useEffect, useContext } from 'react';
import styles from './index.module.css';
import getCookie from '../../../utils/getCookie';
import UserContext from '../../../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comments from '../../comments';

const ArticleDetails = (props) => {

    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [creator, setCreator] = useState('');
    const [createdAt, setCreatedAt] = useState('');

    const [likeCount, setLikeCount] = useState(null);
    const [like, setLike] = useState(false);

    const [active, setActive] = useState(false);

    const [comments, setComments] = useState([]);

    const context = useContext(UserContext);

    const updateComments = (comments) => {
        setComments({comments: comments})
    }

    const toggleLikeColor = () => {
        setActive(!active)
    }

    const checkLike = (article) => {
        const id = context.user.id;
        return article.likes.indexOf(id) !== -1
    }

    const likeFunc = async () => {
        await fetch(`http://localhost:8080/api/article/like/${props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        }).then(() => {
            console.log('liked !!!')
        }).catch((err) => {
            console.log(err)
        })
    }

    const unlikeFunc = async () => {
        await fetch(`http://localhost:8080/api/article/unlike/${props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        }).then(() => {
            console.log('unliked !!!')
        }).catch((err) => {
            console.log(err)
        })
    }

    const likeButtonHandler = () => {
        const callApi = like ? unlikeFunc : likeFunc;
        callApi()
            .then(res => {
                setLike(!like);
            })


        toggleLikeColor()
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/article/details/${props.match.params.id}`)
            .then((res) => {
                return res.json();

            })
            .then((article) => {
                setTitle(article.title);
                setArticle(article.article);
                setImage(article.image);
                setCategory(article.category);
                setCreator(article.creator);
                setCreatedAt(article.createdAt);

                setLikeCount(article.likes.length);
                setLike(checkLike(article));
                setActive(checkLike(article));

                setComments(article.comments);
            })


    }, [like, comments])

    return (
        <div className={styles['post-content']}>
            <div className={styles['post-image']}>
                <h2>{title}</h2>
                <div>
                    <img src={image} alt="blog" className={styles.img} />
                </div>
                <div className={styles['post-info']}>
                    <span>Article By: {creator.username}</span>
                    <span>Created: {(new Date(createdAt)).toDateString()}</span>
                    <span>Category: {category}</span>
                    {/* <span>2 Comments</span>
                    <span>2 Likes</span> */}
                </div>
                <button className={styles.positionLike} onClick={likeButtonHandler}>
                    <FontAwesomeIcon icon={['fas', 'heart']} size="3x" className={active ? styles.like : styles.unlike}></FontAwesomeIcon>
                    {likeCount}
                </button>
            </div>
            <div className={styles['post-title']}>
                <p>{article}</p>
            </div>
            <Comments comments={comments} updateComments={updateComments} />
        </div>
    )
}

export default ArticleDetails;