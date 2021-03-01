import { createStore, combineReducers, applyMiddleware } from 'redux';
import {reducer} from '../reducers/anecdoteReducer';
import { notificationReducer } from '../reducers/notificationReducer';
import {filterReducer} from '../reducers/filterReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const newReducer = combineReducers({
  list: reducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(newReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;