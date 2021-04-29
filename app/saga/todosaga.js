import {delay, takeLatest, put, takeEvery} from 'redux-saga/effects';
import {call} from 'redux-saga/effects';
import axios from 'axios';

export function* fetchalltodo(action) {
  try {
    const apiConfig = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
    };
    const response = yield call(axios, apiConfig);
    //console.log(response);
    yield put({type: 'FETCH_TODO_SUCCESS', payload: response.data});
  } catch (e) {
    console.log(e);
    yield put({type: 'FETCH_TODO_FAILURE', payload: e.message});
  }
}

export function* fetchtodos() {
  yield takeEvery('fetchTodo', fetchalltodo);
}
