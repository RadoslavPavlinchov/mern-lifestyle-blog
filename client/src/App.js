import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Main from './components/main/main-page'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faInstagram, faLinkedin);

function App() {
  return (
    <div className="App">

      <Navigation />
      <Main />
      <Footer />

    </div>
  );
}

export default App;
