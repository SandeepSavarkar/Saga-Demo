//import * as types from '../constants/constants';

export function fetchUserRequest() {
  return {
    type: 'fetch',
  };
}

export function fetchTodoRequest() {
  return {
    type: 'fetchTodo',
  };
}

export function insertRequest() {
  return {
    type: 'add_task',
  };
}


// export function fetchUserSuccess(payload) {
//   return {
//     type: types.FETCH_USERS_SUCCESS,
//     payload: payload,
//   };
// }

// export function fetchUserFailure(payload) {
//   return {
//     type: types.FETCH_USERS_FAILURE,
//     payload: payload,
//   };
// }

// export const fetchUsers = () => {
//   return function (dispatch) {
//     dispatch(fetchUserRequest());
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         const user = response.data;
//         dispatch(fetchUserSuccess(user));
//       })
//       .catch(error => {
//         dispatch(fetchUserFailure(error.message));
//       });
//   };
// };
