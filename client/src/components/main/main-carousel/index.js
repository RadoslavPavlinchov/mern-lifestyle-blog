import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageComp from '../main-carousel-image';
import i1 from '../../../images/carousel/1.jpg'
import i2 from '../../../images/carousel/2.jpg'
import i3 from '../../../images/carousel/3.jpg'


const Carousel = () => {
    let sliderArr = [
        <ImageComp src={i1} />,
        <ImageComp src={i2} />,
        <ImageComp src={i3} />,
        <ImageComp src={i2} />,
        <ImageComp src={i1} />
    ];

    const [x, setX] = useState(0)

    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
    }

    const goRight = () => {
        (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100)
    }

    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}><FontAwesomeIcon icon={['fas', 'chevron-left']} size="3x" style={{color: 'whitesmoke'}}/></button>
            <button id="goRight" onClick={goRight}><FontAwesomeIcon icon={['fas', 'chevron-right']} size="3x" style={{color: 'whitesmoke'}}/></button>
        </div>
    )
}

export default Carousel;