import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Main from './components/main/main-page';
import Carousel from './components/main/main-carousel';
import ArticleContainer from './components/article/article-container';
import ArticleLanding from './components/article/article-landing';
import UserContext from './Context';
import ErrorBoundary from './ErrorBoundary';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faTwitter, faInstagram, faLinkedin, faChevronLeft, faChevronRight, faHeart);

class App extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className="App">

        <Main />

        <ErrorBoundary>
          <ArticleLanding />
        </ErrorBoundary>

        <ArticleContainer />

        <Carousel />

        <Footer />

      </div>
    )
  }
}

export default App;
