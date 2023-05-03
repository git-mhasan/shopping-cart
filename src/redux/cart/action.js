import { ADD_TO_CART, CART_INCREASE, CART_DECREASE, CART_DELETE } from "./actionTypes";

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}
export const increaseQuantity = (id) => {
    return {
        type: CART_INCREASE,
        payload: id
    }
}
export const decreseQuantity = (id) => {
    return {
        type: CART_DECREASE,
        payload: id
    }
}

export const deleteItem = (id) => {
    return {
        type: CART_DELETE,
        payload: id
    }

}