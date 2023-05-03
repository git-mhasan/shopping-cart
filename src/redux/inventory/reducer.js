import { ADD_PRODUCT, PRODUCT_DELETE_FROM_CART, PRODUCT_ENTRY_TO_CART, PRODUCT_REMOVE_FROM_CART } from "./actionTypes";
import initialState from "./initialState"

const nextId = (products) => {
    const maxId = products.reduce((maxId, product) => Math.max(product.id, maxId), -1);
    return maxId + 1;
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    id: nextId(state),
                    productName: action.payload.productName,
                    category: action.payload.category,
                    imageUrl: action.payload.imageUrl,
                    price: action.payload.price,
                    quantity: action.payload.quantity,
                    stock: action.payload.quantity,
                }
            ];
        case PRODUCT_ENTRY_TO_CART:
            return state.map(item => {
                if (item.id === action.payload) {
                    item.stock = item.stock - 1;
                }
                return item;
            });
        case PRODUCT_REMOVE_FROM_CART:
            return state.map(item => {
                if (item.id === action.payload) {
                    item.stock = item.stock + 1;
                }
                return item;
            });
        case PRODUCT_DELETE_FROM_CART:
            return state.map(item => {
                if (item.id === action.payload) {
                    item.stock = item.quantity;
                }
                return item;
            });

        default:
            return state;
    }
}

export default reducer;