import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store'
import { Provider } from 'react-redux';
import { ModalState } from './context/ModalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ModalState>
      <App />
    </ModalState>
  </Provider>
);

reportWebVitals();
