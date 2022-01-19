import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import App from './App';
import configureAppStore from './app/store';
import { worker } from './api/server';
import { fetchUsers } from './features/users/usersSlice';

const store = configureAppStore();

const renderPage = async () => {
  await worker.start({ onUnhandledRequest: 'bypass' });
  store.dispatch(fetchUsers());
  ReactDOM.render(
    <StrictMode>
      <Provider
        store={store}
      >
        <App />
      </Provider>
    </StrictMode>,
    document.getElementById('root')
  );
};

renderPage();

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./App.jsx', renderPage);
}
