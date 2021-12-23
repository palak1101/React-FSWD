import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import Reducer from './reducer/Reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';


const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 11",
    description: "This is information about iPhone 11"
  },
  {
    id: 2,
    name: "iPhone 12",
    description: "This is information about iPhone 12"
  },
  {
    id: 1,
    name: "iphone 13",
    description: "This is information about iPhone 11"
  }
]

const store = createStore(Reducer, PRODUCTS, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

