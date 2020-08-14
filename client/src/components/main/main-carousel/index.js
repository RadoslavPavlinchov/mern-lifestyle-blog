import React, { useState, useCallback, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageComp from '../main-carousel-image';
import _getArticles from '../../../utils/getArticles';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = useCallback(async () => {
        const articles = await _getArticles();
        setArticles(articles);
    }, []);

    useEffect(() => {
        getArticles();
    }, [getArticles])

    const [x, setX] = useState(0)

    const goLeft = () => {
        x === 0 ? setX(-100 * (articles.length - 1)) : setX(x + 100)
    }

    const goRight = () => {
        (x === -100 * (articles.length - 1)) ? setX(0) : setX(x - 100)
    }

    return (
        <div className="slider">

            {
                articles.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            <Link to={{
                                pathname: `/article/details/${item._id}`
                            }}>
                                <ImageComp src={item.image} />
                            </Link>
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}><FontAwesomeIcon icon={['fas', 'chevron-left']} size="3x" style={{ color: 'whitesmoke' }} /></button>
            <button id="goRight" onClick={goRight}><FontAwesomeIcon icon={['fas', 'chevron-right']} size="3x" style={{ color: 'whitesmoke' }} /></button>
        </div>
    )
}

export default Carousel;