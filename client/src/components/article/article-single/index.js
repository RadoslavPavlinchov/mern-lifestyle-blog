import React from 'react';
import './index.css';

const ArticleSingle = () => {
    return (
        <div className="post-content">
            <div className="post-image">
                <div>
                    <img src="https://images.unsplash.com/photo-1594643551111-29af420564e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="blog" className="img" />
                </div>
                <div className="post-info flex-row">
                    <span>User</span>
                    <span>Calendar</span>
                    <span>2 Comments</span>
                </div>
            </div>
            <div className="post-title">
                <a href="#">Hello link</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quis sint. Nesciunt eos quam, accusamus quibusdam cum beatae mollitia eaque reprehenderit quasi totam sint, cupiditate aperiam sit blanditiis. Praesentium, fugiat.</p>
                <button className="btn post-btn">Details</button>
            </div>
        </div>
    )
}

export default ArticleSingle;