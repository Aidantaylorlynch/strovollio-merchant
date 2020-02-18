import { GET_ORDERS, SET_ORDERS, SET_MERCHANT, SET_SELECTED_ORDER } from './actionsTypes';

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

export const SET_SELECTED_ORDER_ACTION_CREATOR = (order) => {
    return {
        type: SET_SELECTED_ORDER,
        payload: {
            order
        }
    }
} 