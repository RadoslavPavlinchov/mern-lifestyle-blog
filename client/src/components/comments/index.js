import React, { useState, useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'

import CardHeader from '@material-ui/core/CardHeader'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import UserContext from '../../Context';
import getCookie from '../../utils/getCookie';

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

export default function Comments(props) {
    const classes = useStyles()
    const [text, setText] = useState('')
    const match = useRouteMatch();

    const context = useContext(UserContext);
    const userId = context.user.id;

    const handleChange = event => {
        setText(event.target.value)
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
            .then((res) => {
                return res.json();
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
            console.log('deleted the comment !!!')
        }).catch((err) => {
            console.log(err)
        })
    }

    const addComment = (event) => {
        if (event.keyCode === 13 && event.target.value) {
            event.preventDefault()

            comment({ text: text })
                .then(res => {
                    setText('');
                    props.updateComments(res.comments)
                    console.log(res)
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
                props.updateComments(res.comments)
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

    return (<div>
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
        {props.comments.slice(0).reverse().map((item, i) => {
            return <CardHeader
                avatar={
                    <Avatar className={classes.smallAvatar} />
                }
                title={commentBody(item)}
                className={classes.cardHeader}
                key={i} />
        })
        }
    </div>)
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    updateComments: PropTypes.func.isRequired
}