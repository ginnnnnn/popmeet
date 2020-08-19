import { combineReducers } from 'redux';
// import sessionStorage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import uiReducer from './ui/ui.reducer';
import createActivityReducer from './createActivity/createActivity.reducer';
const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  createActivity: createActivityReducer,
});
export default rootReducer;
