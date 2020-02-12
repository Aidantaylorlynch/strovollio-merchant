import { SET_ORDERS, SET_MERCHANT } from './actionsTypes';

const initialState = {
    merchantID: null,
    orders: []
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
        default:
            return state
    }
}