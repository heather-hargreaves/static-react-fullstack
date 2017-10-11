import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/index.css';
import App from './components/App';
import CreditCard from './components/CreditCard';
import CreditCardPage from './containers/CreditCardPage';
import CardApplication from './components/CardApplication';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/apply" component={ CardApplication } />
            <Route path="/" component={ CreditCardPage }/>
        </Switch>
    </BrowserRouter>    
), document.getElementById('root'));

registerServiceWorker();
