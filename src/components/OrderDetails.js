import React, { Component } from 'react';
import { Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';

import '../styles/OrderDetailsContainer.css';

export class OrderDetails extends Component {
    render() {
        console.log("props", this.state, this.props)
        return (
            <div className="orderDetailsContainer five-pix-pad">
                <div className="orderDetailsHeader">
                    Order Details
                </div>
                <div className="orderDetailsBody">
                    {this.props.selectedOrder && this.props.selectedOrder.lineItems.map((lineItem, index) => {
                        return (
                            <div key={index}>
                                menuItemID: {lineItem.menuItemID}
                                lineItemID: {lineItem.lineItemID}
                            </div>
                        )
                    })}
                </div>
                <div>
                    <Button appearance="minimal"><Link to="/orders" style={{textDecoration: 'none'}}>Back</Link></Button>
                </div>
            </div>
        )
    }
}