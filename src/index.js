import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './reset.css';
import './index.css';

import store from './store';
import GameConnected from './components/game';


ReactDOM.render(
  <Provider store={store}>
    <GameConnected />
  </Provider>,
  document.getElementById('root'),
);
