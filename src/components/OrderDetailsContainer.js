import { connect } from 'react-redux';
import { OrderDetails } from './OrderDetails';

const mapStateToProps = (state) => {
    return {
        selectedOrder: state.selectedOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export const OrderDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderDetails)