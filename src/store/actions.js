import { GET_ORDERS, SET_ORDERS, SET_MERCHANT } from './actionsTypes';

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

export const SET_MERCHANT_ACTION_CREATOR = (merchantID) => {
    return {
        type: SET_MERCHANT,
        payload: {
            merchantID
        }
    }
}