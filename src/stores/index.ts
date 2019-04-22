import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { all, spawn } from 'redux-saga/effects';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

type StoreInstance = Store;

let storeInstance: StoreInstance;

export default (
  // eslint-disable-next-line
  stores: { name: string; sagas?: any; reducer?: object }[] = [],
  onCompletion: () => void
) => {
  if (storeInstance) {
    return storeInstance;
  }

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [thunkMiddleware, sagaMiddleware];

  const composedEnhancers = (__DEV__ ? composeWithDevTools({ realtime: true }) : compose)(
    applyMiddleware(...middleware)
  );

  const rootReducer = () =>
    combineReducers({
      ...stores.filter(str => str.reducer).reduce((acc, str) => ({ ...acc, [str.name]: str.reducer }), {})
    });

  // Create the store
  const store = createStore(rootReducer(), composedEnhancers);

  sagaMiddleware.run(function*() {
    yield all(stores.filter(str => str.sagas).map(str => spawn(str.sagas)));
  });

  persistStore(store, {}, onCompletion);

  storeInstance = store;

  return storeInstance;
};
