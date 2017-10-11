import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/index.css';
import App from './components/App';
import CreditCard from './components/CreditCard';
import CreditCardPage from './containers/CreditCardPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <Route path="/" component={ CreditCardPage }/>
    </BrowserRouter>    
), document.getElementById('root'));

registerServiceWorker();
