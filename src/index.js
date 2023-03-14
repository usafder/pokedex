import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './containers/App';
import { Spinner } from './components';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner loadingText="Loading..." />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
