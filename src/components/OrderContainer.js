import { connect } from 'react-redux';
import { OrderList } from './OrderList';
import { GET_ORDERS_ACTION_CREATOR } from '../store/actions';

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
        }
    }
}

export const OrderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderList)