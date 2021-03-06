import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './config/theme';
import { history, store } from './store';
import ConnectApp from './provider';
import './index.css';

const ProvidedApp = ConnectApp(store, history, theme)(App);

ReactDOM.render(<ProvidedApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
