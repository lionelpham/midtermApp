import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore,applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const loggerMiddleware = createLogger()
export const store = createStore(reducer,applyMiddleware(thunk,loggerMiddleware))
export const history  = createBrowserHistory();