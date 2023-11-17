import { combineReducers } from 'redux';
import appReducer from './reducers';

const rootReducer = combineReducers({
  app: appReducer,
 
});

export default rootReducer;
