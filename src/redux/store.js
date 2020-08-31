import {logger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import {persistStore} from "redux-persist";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)
