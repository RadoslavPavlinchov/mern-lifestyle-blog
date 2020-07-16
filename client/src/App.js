import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Main from './components/main/main-page';
import Carousel from './components/main/main-carousel';
import ArticleContainer from './components/article/article-container';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faTwitter, faInstagram, faLinkedin, faChevronLeft, faChevronRight);

function App() {
  return (
    <div className="App">

      <Navigation />
      <Main />

      <ArticleContainer />

      <Carousel />

      <Footer />

    </div>
  );
}

export default App;
