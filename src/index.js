import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import Routers from './routers';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import demoSaga from './pages/app/index';
let models = [...demoSaga];
// console.log(models, 'modelsmodels')
let sagaMiddleware = createSagaMiddleware();
let reducer = models.reduce((previousValue, currentValue) => {
    let { reducer } = currentValue;
    return { ...reducer, ...previousValue };
}, {})
// console.log(reducer, '...reducer')
reducer = combineReducers({ ...reducer })
// console.log(reducer, 'reducerreducer')
let sagas = models.reduce((previousValue, currentValue) => {
    let { sagas } = currentValue;
    previousValue.push(sagas);
    return previousValue;
}, [])
function* rootSaga() {
    yield (sagas || []).map(fn => { return fn && fn() });
}
let store;
let middlewares = [];
const history = createBrowserHistory();
middlewares.push(routerMiddleware(history));
middlewares.push(sagaMiddleware);
store = createStore(reducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)
ReactDOM.render(
    <Routers store={store} history={history} />
    , document.getElementById('root')); 
