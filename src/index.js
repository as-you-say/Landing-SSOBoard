import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './stores';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/Landing-SSOBoard">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);