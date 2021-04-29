import * as types from '../constants/constants';
const initialState = {
  loading: false,
  tododata: [],
  error: '',
};
export default function todoreducer(state = initialState, action) {
  console.log(action.type);
 console.log(action.payload);
  switch (action.type) {
    case types.FETCH_TODO_REQUEST:
      return {
        ...state,
        loader: true,
      };
    case types.FETCH_TODO_SUCCESS:
      return {
        ...state,
        loader: false,
        tododata: action.payload,
        error: '',
      };
    case types.FETCH_TODO_FAILURE:
      return {
        ...state,
        loader: false,
        error: action.payload,
      };
  }
  return state;
}
