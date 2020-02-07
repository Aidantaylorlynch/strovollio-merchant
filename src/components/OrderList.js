import React, { Component } from 'react';
import { Order } from './Order';
import '../styles/OrderList.scss';

export class OrderList extends Component {
    componentDidMount() {
        this.props.getOrders()
    }
    render() {
        return (
            <div className="orderListContainer">
                <div className="titleContainer">
                    Strovollio Merchant
                </div>
                <div className="ordersContainer">
                    {this.props.orders.length > 0 && this.props.orders.map((order, index) => {
                        return (
                            <Order key={index} order={order}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}