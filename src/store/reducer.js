import { SET_ORDERS } from './actionsTypes';

const initialState = {
    merchantID: 1,
    orders: []
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: action.payload.orders
            }
        default:
            return state
    }
}