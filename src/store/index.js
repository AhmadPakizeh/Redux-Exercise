import { createStore } from 'redux';
import { footballReducer } from './Reducers/football.reducer';

export const store = createStore(
  footballReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
