import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import store from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
