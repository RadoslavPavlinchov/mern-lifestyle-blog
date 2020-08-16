import React, { useState } from 'react';
import styles from './index.module.css'
import { Link } from 'react-router-dom';
import Input from '../../../../components/input';
import TextArea from '../../../../components/textarea';
import SubmitButton from '../../../../components/submit-btn'
import getCookie from '../../../../utils/getCookie';

const CreateArticle = () => {

    const [title, setTitle] = useState('')
    const [article, setArticle] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');

    const [titleError, setTitleError] = useState(false);
    const [articleError, setArticleError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);

    const openWidget = () => {
        const widget = window.cloudinary.createUploadWidget({
            cloudName: 'dymjwxfvd',
            uploadPreset: 'mern-lifestyle-blog',
        }, (error, result) => {
            if (result.event === 'success') {
                console.log(result.info.url)
                setImage(result.info.url)
            }
        })
        widget.open()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8080/api/article/create', {
            method: 'POST',
            body: JSON.stringify({
                title,
                article,
                image,
                category
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })
            .then(() => {
                alert('The article has been created successfully!')
            })

        setTitle('');
        setArticle('');
        setImage(null);
        setCategory('')
    }

    const handleTitleBlur = () => {
        if (!title) {
            setTitleError(true)
        } else if (titleError) {
            setTitleError(false)
        }
    }

    const handleArticleBlur = () => {
        if (!article) {
            setArticleError(true)
        } else if (articleError) {
            setArticleError(false)
        }
    }

    const handleCategoryBlur = () => {
        if (!category) {
            setCategoryError(true)
        } else if (categoryError) {
            setCategoryError(false)
        }
    }

    return (
        <div className={styles['admin-wrapper']}>

            <div className={styles['left-sidebar']}>
                <ul>
                    <li><Link to="/admin/articles" className={styles.brand}>Articles</Link></li>
                    <li><Link to="/admin/users" className={styles.brand}>Users</Link></li>
                    <li><Link to="/admin/categories" className={styles.brand}>Categories</Link></li>
                </ul>
            </div>

            <div className={styles['admin-content']}>

                <div className={styles.content}>
                    <h2 className={styles['page-title']}>Create Article</h2>

                    <SubmitButton title='Upload Image' onClick={openWidget} />

                    <form>
                        {image ? (<img src={image} className={styles['img-cloud']} alt='img' />) : null}

                        <Input
                            id='title'
                            label='Title'
                            type='text'
                            onChange={e => setTitle(e.target.value)}
                            onBlur={handleTitleBlur}
                            error={titleError}
                            value={title}
                        />
                        {titleError ? (<span className={styles.err}>This field should not be empty</span>) : null}

                        <label htmlFor="article">Article</label>

                        <TextArea
                            id="article"
                            name="article"
                            value={article}
                            onBlur={handleArticleBlur}
                            error={articleError}
                            onChange={e => setArticle(e.target.value)}
                        />
                        {articleError ? (<span className={styles.err}>This field should not be empty</span>) : null}

                        <Input
                            id='category'
                            label='Category'
                            type='text'
                            onChange={e => setCategory(e.target.value)}
                            onBlur={handleCategoryBlur}
                            error={categoryError}
                            value={category}
                        />
                        {categoryError ? (<span className={styles.err}>This field should not be empty</span>) : null}

                        <SubmitButton title="Create" onClick={handleSubmit} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateArticle;