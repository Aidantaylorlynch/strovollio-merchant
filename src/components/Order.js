import React, { Component } from 'react';

export class Order extends Component {
    render() {
        return (
            <div className="orderContainer five-pix-pad">
                Order: {this.props.order.orderID}
            </div>
        )
    }
}