import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {  ThemeProvider, } from './providers/ThemeProviders';
import { Provider } from 'react-redux';
import { store } from './Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <App/>
    </Provider>
  </ThemeProvider>
);

