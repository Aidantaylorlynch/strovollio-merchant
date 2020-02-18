import React, { Component } from 'react';
import { Order } from './Order';
import { Redirect } from 'react-router-dom';

import '../styles/OrderList.css';

export class OrderList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            intervalID: null
        }
    }

    async componentDidMount() {
        if (this.props.merchantID) {
            this.props.getOrders(this.props.merchantID)
        }
        try {
            const setIntervalID = setInterval(() => {
                console.log("fetching")
                if (this.props.merchantID) {
                    this.props.getOrders(this.props.merchantID)
                }
            }, 5000)
            this.setState({ intervalID: setIntervalID })
        } catch (error) {
            console.log("error setting interval", error)
        }
    }

    componentWillUnmount() {
        if (this.state.intervalID !== null) {
            console.log("clearing interval")
            clearInterval(this.state.intervalID);
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