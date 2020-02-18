import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Order.css';

export class Order extends Component {
    render() {
        return (
            <Link onClick={() => {
                this.props.setSelectedOrder(this.props.order)
            }} to="/orderdetails" style={{ textDecoration: 'None' }}>
                <div className="orderContainer five-pix-pad">
                    <div className="orderHeader five-pix-pad">
                        Order
                    </div>
                    <div className="orderBody five-pix-pad">
                        {new Date(this.props.order.orderDate).toLocaleTimeString()} - {new Date(this.props.order.orderDate).toLocaleDateString()}
                    </div>
                </div>
            </Link>
        )
    }
}