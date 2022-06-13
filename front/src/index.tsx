import React from 'react';
import './index.css';
import './styles/css/reset.css';
import {BrowserRouter} from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
);
