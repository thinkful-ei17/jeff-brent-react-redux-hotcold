import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './reset.css';
import './index.css';

import store from './store';
import ConnectedGame from './components/game';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedGame />
  </Provider>,
  document.getElementById('root'),
);
