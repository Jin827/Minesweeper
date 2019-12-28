import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers'
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
export const history = createBrowserHistory();

const enhancers = [];
const middleware = [
  thunkMiddleware,
  routerMiddleware(history),
  createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
    collapsed: true,
  }),
];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
)

export default preloadedState => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composedEnhancers
  )
  return store;
}