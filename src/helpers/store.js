import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const loggerMiddleware = createLogger()
const composeEnhancers = composeWithDevTools({
    
});
export const store = createStore(
    reducer,composeEnhancers(applyMiddleware(thunk,loggerMiddleware),
))
export const history  = createBrowserHistory();