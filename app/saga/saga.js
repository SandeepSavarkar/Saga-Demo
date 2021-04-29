import {delay, takeLatest, put, takeEvery} from 'redux-saga/effects';
import {call} from 'redux-saga/effects';
import axios from 'axios';

//Worker Function
function* fetchUserRequest(action) {
  try {
    const apiConfig = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users',
    };

    const response = yield call(axios, apiConfig);
    //console.log(response.data);
    yield put({type: 'FETCH_USERS_SUCCESS', payload: response.data});
  } catch (e) {
    console.log(e);
    yield put({type: 'FETCH_USERS_FAILURE', payload: e.message});
  }
}

//Watcher function
export function* fetchUsers() {
  yield takeEvery('fetch', fetchUserRequest);
}

// const users = yield call(api);
// try {
//   yield delay(5000);
//   console.log(users);
//   yield put(goto());
//   yield put(send(users));
//   yield put(count());
//   yield put(send(users));
// } catch (error) {
//   console.log(error);
// }

// yield put({
//   type: 'FETCH_USERS_FAILURE',
//   //payload: user,
// });

// function* fetchUserRequest() {
//   console.log('Hi');
// }

// function* fetchUserSuccess(user) {
//   yield put({
//     type: FETCH_USERS_SUCCESS,
//     payload: user,
//   });
// }

// function* fetchUserFailure(error) {
//   yield put({
//     type: FETCH_USERS_FAILURE,
//     payload: error,
//   });
// }
// const goto = () => {
//   return {
//     type: 'FETCH_USERS_REQUEST',
//   };
// };
// const send = users => {
//   console.log('Users ' + users);
//   return {
//     type: 'FETCH_USERS_SUCCESS',
//     payload: users,
//   };
// };
// const count = () => {
//   return {
//     type: 'FETCH_USERS_FAILURE',
//   };
// };

function api() {
  // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
  //   return JSON.parse(JSON.stringify(res));
  // });

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      // quote.innerText = data[0].quote;
      return data;
    })
    .catch(err => console.log(err));
  // axios
  //   .get('https://jsonplaceholder.typicode.com/users')
  //   .then(function (response) {
  //     //console.log(response.data); // DISPLAYS THE DATA I WANT
  //     return response.data; // THROWS TYPE ERROR: Cannot set property 'thoughtWallet' of undefined at eval
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
}
