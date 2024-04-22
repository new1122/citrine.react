import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './AuthProvider';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <AuthProvider>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
