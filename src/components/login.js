import React, { Component } from 'react';
import { TextInput, Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            merchantID: ""
        }
    }
    render() {
        return (
            <div className="loginContainer">
                <div className="five-pix-pad">
                    {this.props.title}
                </div>
                <div className="five-pix-pad">
                    <TextInput onChange={(e) => {
                        this.setState({ merchantID: e.target.value });
                        console.log(this.state)
                    }} placeholder="Merchant ID"></TextInput>
                </div>
                <div className="five-pix-pad">
                    <TextInput placeholder="Password" type="password"></TextInput>
                </div>
                <div className="five-pix-pad">
                    <Button appearance="minimal" onClick={() => {
                        this.props.setMerchant(this.state.merchantID);
                    }}><Link to="/orders" style={{textDecoration: 'none'}}>Login</Link></Button>
                </div>
            </div>
        )
    }
}