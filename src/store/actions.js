import { GET_ORDERS, SET_ORDERS } from './actionsTypes';

export const GET_ORDERS_ACTION_CREATOR = (merchantID) => {
    return {
        type: GET_ORDERS,
        payload: {
            merchantID
        }
    }
}

export const SET_ORDERS_ACTION_CREATOR = (orders) => {
    return {
        type: SET_ORDERS,
        payload: {
            orders
        }
    }
}