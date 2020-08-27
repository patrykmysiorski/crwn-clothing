import {logger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
