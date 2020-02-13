import React, { Component } from 'react';
import { Order } from './Order';
import { Redirect } from 'react-router-dom';

import '../styles/OrderList.scss';

export class OrderList extends Component {
    async componentDidMount() {
        if (this.props.merchantID) {
            this.props.getOrders(this.props.merchantID)
        }
        try {
            setInterval(() => {
                console.log("fetching")
                if (this.props.merchantID) {
                    this.props.getOrders(this.props.merchantID)
                }
            }, 5000)
        } catch (error) {
            console.log("error setting interval", error)
        }
    }
    render() {
        if (this.props.merchantID) {
            return (
                <div className="orderListContainer">
                    <div className="titleContainer">
                        Strovollio Merchant
                    </div>
                    <div className="ordersContainer">
                        {this.props.orders && this.props.orders.map((order, index) => {
                            return (
                                <Order key={index} setSelectedOrder={this.props.setSelectedOrder} order={order}/>
                            )
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to="/" />
            )
        }
    }
}