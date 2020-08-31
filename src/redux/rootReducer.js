import userReducer from "./user/userReducer";
import {combineReducers} from "redux";
import cartReducer from "./cart/cartReducer";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)
