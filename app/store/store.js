import * as reducers from '../reducers/rootreducers';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
//import {createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import todoreducer from '../reducers/todoreducer';
// import {fetchtodos} from '../saga/todosaga';
import rootreducer from '../reducers/rootreducers';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootreducer, applyMiddleware(sagaMiddleware));
//export const store = createStore(reducer, applyMiddleware(thunk));
sagaMiddleware.run(rootSaga);
store.subscribe(() => {
  console.log(store.getState());
});
//store.dispatch(fetchUser());
