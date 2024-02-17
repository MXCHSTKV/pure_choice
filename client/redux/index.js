// import { createStore, applyMiddleware, compose } from 'redux'  
// import { composeWithDevTools } from 'redux-devtools-extension'  
// import { thunk }  from 'redux-thunk'

// import createRootReducer from './reducers/index.js'  
  
// const middleware = [thunk,]  
// const initialState = {}
  
// const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose  
// const composedEnchanters = composeFunc(applyMiddleware(...middleware))  
// const store = createStore(createRootReducer(), initialState, composedEnchanters)  
  
// export default store


import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session.js';

import createRootReducer from './reducers/index.js';


const persistConfig = {
  key: 'root',
  storage: storageSession, // используем sessionStorage
};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

const middleware = [thunk];
const initialState = {};

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composedEnchanters = composeFunc(applyMiddleware(...middleware));
const store = createStore(persistedReducer, initialState, composedEnchanters);
const persistor = persistStore(store);

export { store, persistor };
