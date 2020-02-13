import { connect } from 'react-redux';
import { OrderList } from './OrderList';
import { GET_ORDERS_ACTION_CREATOR, SET_SELECTED_ORDER_ACTION_CREATOR } from '../store/actions';

const mapStateToProps = (state) => {
    return {
        merchantID: state.merchantID,
        orders: state.orders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrders: (merchantID) => {
            return dispatch(GET_ORDERS_ACTION_CREATOR(merchantID))
        },
        setSelectedOrder: (order) => {
            return dispatch(SET_SELECTED_ORDER_ACTION_CREATOR(order))
        }
    }
}

export const OrderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderList)