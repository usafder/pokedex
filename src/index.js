import App from 'containers/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'tachyons';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
