import React, { Component } from 'react';
import { TextInput, Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            merchantID: ""
        }
    }
    render() {
        return (
            <div className="">
                Login
                <TextInput onChange={(e) => {
                    this.setState({ merchantID: e.target.value });
                    console.log(this.state)
                }} placeholder="Merchant ID"></TextInput>
                <Button onClick={() => {
                    this.props.setMerchant(this.state.merchantID);
                }}><Link to="/orders" style={{textDecoration: 'none'}}>Login</Link></Button>
            </div>
        )
    }
}