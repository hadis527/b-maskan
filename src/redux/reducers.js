import { combineReducers } from 'redux';
import Stock from './stock/reducer';

const reducers = combineReducers({
  Stock,
});

export default reducers;