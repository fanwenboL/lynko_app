import React from 'react';
import { Router, Route } from 'react-router';
import App from './app/App';
import About from './app/About';
import Layout from './layout/index';

const Routers = ({ history }) => {
    return <Layout><Router history={history}>
        < Route path='/' exact component={App} ></Route>
        < Route path='/about' component={About} ></Route>
    </Router >
    </Layout>
};
export default Routers;