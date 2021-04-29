import * as users from './action';
import * as todo from './todos';

const action = {
  ...users,
  ...todo,
};

export default {action};
