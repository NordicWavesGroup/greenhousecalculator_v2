import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import './index.scss';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactGA.initialize('G-CB09DB5YGC');


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

