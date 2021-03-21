import { createStore } from 'redux';
import * as redux from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { mainReducer } from './mainReducer';

const reduxLogger = createLogger({
  collapsed: true,
});

const middleware = redux.applyMiddleware(reduxThunk, reduxLogger);

export default createStore(mainReducer, middleware);
