import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loadimages from './components/front';
import { DataProvider } from './components/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataProvider> <App /></DataProvider>
   
);
reportWebVitals();
