import { connect } from 'react-redux';
import { Login } from './login';
import { SET_MERCHANT_ACTION_CREATOR } from '../store/actions';

const mapStateToProps = (state) => {
    return {
        title: state.appTitle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMerchant: (merchantID) => {
            return dispatch(SET_MERCHANT_ACTION_CREATOR(merchantID))
        }
    }
}

export const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)