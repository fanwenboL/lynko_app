import React from 'react';
import { Router, Route } from 'react-router';
import App from './pages/app/App';
import About from './app/About';
import Layout from './layout/index';
import { Provider } from 'react-redux';

const Routers = ({ history, store }) => {
    return <Layout><Provider store={store}><Router history={history}>
        < Route path='/' exact component={App} ></Route>
        < Route path='/about' component={About} ></Route>
    </Router ></Provider>
    </Layout>
};
export default Routers;