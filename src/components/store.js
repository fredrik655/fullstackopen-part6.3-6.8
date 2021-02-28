import { createStore, combineReducers } from 'redux';
import {reducer} from '../reducers/anecdoteReducer';
import { notificationReducer } from '../reducers/notificationReducer';
import {filterReducer} from '../reducers/filterReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const newReducer = combineReducers({
  list: reducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(newReducer, composeWithDevTools());

export default store;