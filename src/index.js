import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux' 
import thunk from 'redux-thunk'

import rootReducer from "./redux/reducers"

import './index.css';
import App from './App';

const store =createStore(rootReducer,compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);


