import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root.reducer';
import logger from 'redux-logger';

const middleware = [];

middleware.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middleware));
