import * as types from '../constants/constants';

export function fetchTodoRequest() {
  return {
    type: types.FETCH_TODO_REQUEST,
  };
}

export function fetchTodoSuccess(payload) {
  return {
    type: types.FETCH_TODO_SUCCESS,
    payload: payload,
  };
}

export function fetchTodoFailure(payload) {
  return {
    type: types.FETCH_TODO_FAILURE,
    payload: payload,
  };
}