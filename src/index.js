import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import Routers from './routers';

const history = createBrowserHistory();
console.log(Routers, 'routers')
ReactDOM.render(
    <Routers history={history} />
    , document.getElementById('root')); 
