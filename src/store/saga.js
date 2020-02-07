import { call, put, takeLatest, all } from 'redux-saga/effects';
import { GET_ORDERS } from './actionsTypes';
import { SET_ORDERS_ACTION_CREATOR } from './actions';
import { getOrders } from '../services/orderService';

function* fetchOrders(action) {
    try {
        const orders = yield call(getOrders, action.payload.merchantID)
        yield put(SET_ORDERS_ACTION_CREATOR(orders))
    } catch (error) {
        console.log("error getOrders", error)
    }
}

export const saga = function*() {
    yield all([
        takeLatest(GET_ORDERS, fetchOrders)
    ])
}