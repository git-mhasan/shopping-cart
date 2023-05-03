import { ADD_PRODUCT, PRODUCT_DELETE_FROM_CART, PRODUCT_ENTRY_TO_CART, PRODUCT_REMOVE_FROM_CART } from "./actionTypes"

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const productEntryToCart = (id) => {
    return {
        type: PRODUCT_ENTRY_TO_CART,
        payload: id
    }
}
export const productRemoveFromCart = (id) => {
    return {
        type: PRODUCT_REMOVE_FROM_CART,
        payload: id
    }
}

export const productDeleteFromCart = (id) => {
    return {
        type: PRODUCT_DELETE_FROM_CART,
        payload: id
    }
}