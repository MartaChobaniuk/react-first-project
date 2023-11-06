import React from 'react';
import { createRoot } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import MainApp from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<MainApp/>);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
