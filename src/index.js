import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './reset.css';
import './index.css';
import { submitGuess, newGame } from './actions';

import store from './store';
import Game from './components/game';


ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root'),
);
