import React from 'react';
import './index.css'
// import ArticleSingle from '../article-single';

const Popular = () => {
    return (
        <div className="small-popular-posts">
            <h2>Popular posts</h2>
            <div className="small-post-content">
                <div className="small-post-image">
                    <div>
                        <img src="https://images.unsplash.com/photo-1594643551111-29af420564e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="blog" className="img" />
                    </div>
                    <div className="small-post-info flex-row">
                        <span>Calendar</span>
                        <span>2 Comments</span>
                    </div>
                </div>
                <div className="small-post-title">
                    <a href="#">Hello link</a>
                </div>
            </div>

            <div className="small-post-content">
                <div className="small-post-image">
                    <div>
                        <img src="https://images.unsplash.com/photo-1594643551111-29af420564e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="blog" className="img" />
                    </div>
                    <div className="small-post-info flex-row">
                        <span>Calendar</span>
                        <span>2 Comments</span>
                    </div>
                </div>
                <div className="small-post-title">
                    <a href="#">Hello link</a>
                </div>
            </div>

            <div className="small-post-content">
                <div className="small-post-image">
                    <div>
                        <img src="https://images.unsplash.com/photo-1594643551111-29af420564e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="blog" className="img" />
                    </div>
                    <div className="small-post-info flex-row">
                        <span>Calendar</span>
                        <span>2 Comments</span>
                    </div>
                </div>
                <div className="small-post-title">
                    <a href="#">Hello link</a>
                </div>
            </div>
        </div>
    )
}

export default Popular;