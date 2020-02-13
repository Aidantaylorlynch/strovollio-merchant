import { SET_ORDERS, SET_MERCHANT, SET_SELECTED_ORDER } from './actionsTypes';

const initialState = {
    appTitle: "Strovollio Merchant",
    merchantID: null,
    orders: [],
    selectedOrder: null
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: action.payload.orders
            }
        case SET_MERCHANT:
            return {
                ...state,
                merchantID: action.payload.merchantID
            }
        case SET_SELECTED_ORDER:
            console.log(action)
            return {
                ...state,
                selectedOrder: action.payload.order
            }
        default:
            return state
    }
}