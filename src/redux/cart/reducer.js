import { ADD_TO_CART, CART_DECREASE, CART_DELETE, CART_INCREASE } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                {
                    id: action.payload,
                    cartQuantity: 1
                }
            ];

        case CART_INCREASE:
            return state.map(item => {
                if (item.id === action.payload) {
                    item.cartQuantity = item.cartQuantity + 1;
                }
                return item;
            });

        case CART_DECREASE:
            return state.map(item => {
                if (item.id === action.payload) {
                    item.cartQuantity = item.cartQuantity - 1;
                }
                return item;
            });

        case CART_DELETE:
            return state.filter(item => item.id !== action.payload);

        default:
            return state;
    }
}

export default reducer;