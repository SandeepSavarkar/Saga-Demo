import {fork, spawn} from 'redux-saga/effects';

import {fetchUsers} from './saga';
import {fetchtodos} from './todosaga';

export default function* rootSaga() {
  yield fork(fetchUsers);
  yield fork(fetchtodos);
}
