import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './app';

const createRootReducer = history =>
  combineReducers({
    app,
    router: connectRouter(history),
  });

export default createRootReducer;
