import React from 'react';
import { createRoot } from 'react-dom/client';
import 'tachyons';
import { Spinner } from './components';
import './index.css';

const App = React.lazy(() => import('./containers/App'));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner loadingText="Loading..." />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
