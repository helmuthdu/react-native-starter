import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { all, spawn } from 'redux-saga/effects';
import thunkMiddleware from 'redux-thunk';

type StoreInstance = Store;

let storeInstance: StoreInstance;

export default (
  // eslint-disable-next-line
  stores: { name: string; sagas?: any; reducer?: object }[] = [],
  onCompletion?: () => void
) => {
  if (storeInstance) {
    return storeInstance;
  }

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [thunkMiddleware, sagaMiddleware];

  const composedEnhancers = compose(applyMiddleware(...middleware));

  // Create the store
  const store = createStore(
    combineReducers({
      form: formReducer,
      ...stores.filter(str => str.reducer).reduce((acc, str) => ({ ...acc, [str.name]: str.reducer }), {})
    }),
    composedEnhancers
  );

  sagaMiddleware.run(function*() {
    yield all(stores.filter(str => str.sagas).map(str => spawn(str.sagas)));
  });

  if (onCompletion) {
    persistStore(store, {}, onCompletion);
  }

  storeInstance = store;

  return storeInstance;
};
