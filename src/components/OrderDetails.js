import React, { Component } from 'react';

import '../styles/OrderDetailsContainer.scss';

export class OrderDetails extends Component {
    render() {
        console.log(this.state, this.props)
        return (
            <div className="orderDetailsContainer five-pix-pad">
                <div className="orderDetailsHeader">
                    Order Details
                </div>
                <div className="orderDetailsBody">
                    {this.props.selectedOrder && this.props.selectedOrder.menuItems.map((menuItem, index) => {
                        return (
                            <div key={index}>
                                {menuItem.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}