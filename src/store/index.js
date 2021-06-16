import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { createBrowserHistory as createHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

const history = createHistory();
const sagaMiddleware = createSagaMiddleWare();
const routeMiddleware = routerMiddleware(history);
const middlewares = [logger, sagaMiddleware, routeMiddleware];

const appliedMiddlewares = applyMiddleware(...middlewares);

const store = createStore(rootReducer(history), compose(appliedMiddlewares));

sagaMiddleware.run(rootSaga);

export { store, history };
