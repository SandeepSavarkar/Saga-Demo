import * as action from '../../../constants/constants';
export function addTask(value) {
  return {
    type: action.INSERT_TASK,
    payload: value,
  };
}
