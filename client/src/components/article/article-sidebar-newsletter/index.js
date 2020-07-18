import React from 'react';
import './index.css'

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h2>Newsletter</h2>
            <div className="form-element">
                <input type="text" className="input-element" placeholder="Email"/>
                <button className="btn-1 form-btn">Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter;