import * as types from '../../../constants/constants';
const initialState = {
  taskdata: [],
};
export default function reducer(state = initialState, action) {
  //console.log(action.type);
  //console.log(action.payload);
  switch (action.type) {
    case types.INSERT_TASK:
      return {
        ...state,
        taskdata: [...state.taskdata, action.payload],
      };
  }
  return state;
}
