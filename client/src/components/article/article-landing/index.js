import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';

const ArticleLanding = () => {
    return (
        <div className="wrapper">
            <section className="index-links">
                <Link to="/article/details/1">
                    <div className="index-boxlink-rectangle">
                        <img src="https://images.unsplash.com/photo-1594253727287-dd52af55e496?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                        <h3>Box 1</h3>
                        <p>This is a link</p>
                    </div>
                </Link>
                <a href="#">
                    <div className="index-boxlink-square">
                        <img src="https://images.unsplash.com/photo-1594253727287-dd52af55e496?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                        <h3>Box 2</h3>
                        <p>This is a link</p>
                    </div>
                </a>
                <a href="#">
                    <div className="index-boxlink-square">
                        <img src="https://images.unsplash.com/photo-1594253727287-dd52af55e496?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                        <h3>Box 3</h3>
                        <p>This is a link</p>
                    </div>
                </a>
                <a href="#">
                    <div className="index-boxlink-rectangle">
                        <img src="https://images.unsplash.com/photo-1594253727287-dd52af55e496?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                        <h3>Box 4</h3>
                        <p>This is a link</p>
                    </div>
                </a>
                <a href="#">
                    <div className="index-boxlink-square">
                        <img src="https://images.unsplash.com/photo-1594253727287-dd52af55e496?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                        <h3>Box 5</h3>
                        <p>This is a link</p>
                    </div>
                </a>
                <a href="#">
                    <div className="index-boxlink-square">
                        <img src="https://images.unsplash.com/photo-1594253727287-dd52af55e496?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                        <h3>Box 6</h3>
                        <p>This is a link</p>
                    </div>
                </a>
            </section>
        </div>
    )
}

export default ArticleLanding;