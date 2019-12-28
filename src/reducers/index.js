import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import mineSearch from './mineReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    mineSearch
  });
