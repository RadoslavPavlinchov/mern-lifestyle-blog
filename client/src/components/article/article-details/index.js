import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom'

import CardHeader from '@material-ui/core/CardHeader'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles'

import styles from './index.module.css';
import getCookie from '../../../utils/getCookie';
import UserContext from '../../../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
    cardHeader: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    smallAvatar: {
        width: 25,
        height: 25
    },
    commentField: {
        width: '40%'
    },
    commentText: {
        backgroundColor: 'white',
        padding: theme.spacing(1),
        margin: `2px ${theme.spacing(2)}px 2px 2px`
    },
    commentDate: {
        display: 'block',
        color: 'gray',
        fontSize: '0.8em'
    },
    commentDelete: {
        fontSize: '1.6em',
        verticalAlign: 'middle',
        cursor: 'pointer'
    }
}))

const ArticleDetails = (props) => {
    const classes = useStyles();
    const match = useRouteMatch();
    const context = useContext(UserContext);
    const userId = context.user.id;

    const [article, setArticle] = useState([]);
    const [text, setText] = useState('')
    const [likeCount, setLikeCount] = useState(null);
    const [like, setLike] = useState(false);
    const [active, setActive] = useState(false);
    const [comments, setComments] = useState([]);

    const handleChange = event => {
        setText(event.target.value)
    }

    const toggleLikeColor = () => {
        setActive(!active)
    }

    const checkLike = (article) => {
        const id = context.user.id;
        return article.likes.indexOf(id) !== -1
    }

    const comment = async (comment) => {
        await fetch(`http://localhost:8080/api/article/comment/${match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            },
            body: JSON.stringify({
                comment: comment
            })

        })
            .then(() => {
                getArticle();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const uncomment = async (comment) => {
        await fetch(`http://localhost:8080/api/article/uncomment/${match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            },
            body: JSON.stringify({
                comment: comment
            })
        }).then(() => {
            getArticle();
        }).catch((err) => {
            console.log(err)
        })
    }

    const addComment = (event) => {
        if (event.keyCode === 13 && event.target.value) {
            event.preventDefault()

            comment({ text: text })
                .then(() => {
                    setText('');
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const deleteComment = commentT => event => {
        uncomment(commentT)
            .then(res => {
                setText('');
            })
            .catch(err => {
                console.log(err)
            })
    }

    const commentBody = item => {
        return (
            <p className={classes.commentText}>
                <span>{item.name}</span>
                <br />
                {item.text}
                <span className={classes.commentDate}>
                    {(new Date(item.created)).toDateString()} |
            {userId === item.postedBy &&
                        <DeleteIcon onClick={deleteComment(item)} className={classes.commentDelete}>delete</DeleteIcon>}
                </span>
            </p>
        )
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
            getArticle();
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
            getArticle();
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

    const _getArticle = async () => {
        const promise = await fetch(`http://localhost:8080/api/article/details/${props.match.params.id}`);
        const article = await promise.json();
        return article;
    }

    const getArticle = useCallback(async () => {
        const article = await _getArticle();
        setArticle(article);

        setLikeCount(article.likes.length);
        setLike(checkLike(article));
        setActive(checkLike(article));

        setComments(article.comments);
    }, []);

    useEffect(() => {
        getArticle();
    }, [getArticle])

    return (
        <div className={styles['post-content']}>
            <div className={styles['post-image']}>
                <h2>{article.title}</h2>
                <div>
                    <img src={article.image} alt="blog" className={styles.img} />
                </div>
                <div className={styles['post-info']}>
                    <span>Article By: {}</span>
                    <span>Created: {(new Date(article.createdAt)).toDateString()}</span>
                    <span>Category: {article.category}</span>
                </div>

                {
                    (context.user.loggedIn) && <button className={styles.positionLike} onClick={likeButtonHandler}>
                        <FontAwesomeIcon icon={['fas', 'heart']} size="3x" className={active ? styles.like : styles.unlike}></FontAwesomeIcon>
                        {likeCount}
                    </button>
                }


            </div>
            <div className={styles['post-title']}>
                <p>{article.article}</p>
            </div>

            <div>
                <h3>Leave a comment</h3>
                <CardHeader
                    title={<TextField
                        onKeyDown={addComment}
                        multiline
                        value={text}
                        onChange={handleChange}
                        placeholder="Write something ..."
                        className={classes.commentField}
                        margin="normal"
                    />}
                    className={classes.cardHeader}
                />
                {comments.slice(0).reverse().map((item, i) => {
                    return <CardHeader
                        avatar={
                            <Avatar className={classes.smallAvatar} />
                        }
                        title={commentBody(item)}
                        className={classes.cardHeader}
                        key={i} />
                })
                }
            </div>

        </div>
    )
}

export default ArticleDetails;
