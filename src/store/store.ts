import { compose, legacy_createStore as createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
// import thunk from 'redux-thunk';
declare global {
  interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
type ExtendedPersistConfig= PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}
export type RootState=ReturnType<typeof rootReducer>

import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./root-saga";
const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware

].filter((middleware):middleware is Middleware =>Boolean(middleware))
// const thunkMiddleware= store=>next=>action=>{
//   if (typeof action === 'function'){
//     action(dispatch)
//   }
// }
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))
export const store = createStore(persistedReducer, undefined, composedEnhancers)
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store) 