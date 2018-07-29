import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './reducers/indexReducer';

export default function configureStore(initialState = {}) {
 return createStore(
  indexReducer,
  applyMiddleware(thunk)
 );
}
