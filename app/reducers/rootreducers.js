import {combineReducers} from 'redux';
import userreducer from './userreducer';
import todoreducer from './todoreducer';
import taskreducer from '../redux/reducers/home/reducer';
const rootReducer = combineReducers({
  userreducer: userreducer,
  todoreducer: todoreducer,
  taskreducer: taskreducer,
});

export default rootReducer;
