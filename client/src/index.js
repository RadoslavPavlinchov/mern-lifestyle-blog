import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import UserState from './components/userState';

ReactDOM.render(
  <React.StrictMode>

      <UserState>
        <Router />
      </UserState>

  </React.StrictMode>,
  document.getElementById('root')
);

