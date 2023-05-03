import { combineReducers } from "redux";
import productsReducer from "./inventory/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer

});

export default rootReducer;