import * as types from '../constants/constants';
const initialState = {
  loading: false,
  data: [],
  error: '',
  counter: 0,
}
export default function userreducer(state = initialState, action){
  //console.log(action.type);
  //console.log(action.payload);
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        loader: true,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loader: false,
        data: action.payload,
        error: '',
      };
    case types.FETCH_USERS_FAILURE:
      return {
        error: action.payload,
        counter: state.counter + 1,
      };
  }
  return state;
};
