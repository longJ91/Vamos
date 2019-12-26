import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './LoginPage.css'

import * as api from '../lib/api';

class LoginPage extends Component {
    state = {
        email: '',
        pwd: ''
    }

    postLogin = async (email, pwd) => {
        // const result = await api.getTest();
        const result = await api.postLogin(email, pwd);
        console.log(result);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleClick = () => {
        const { email, pwd } = this.state;
        this.postLogin(email, pwd);
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="div-login-page">
                <div className="div-logo">
                    <svg className="svg-logo">

                    </svg>
                    
                </div>
                <div className="div-email">
                    <TextField name="email" label="Email" variant="outlined" onChange={this.handleChange}/>
                </div>
                <div className="div-pwd">
                    <TextField name="pwd" label="Password" variant="outlined" onChange={this.handleChange}/>
                </div>
                <div className="div-button">
                    <Button variant="contained" color="primary" fullWidth onClick={this.handleClick}>
                        로그인
                    </Button>
                </div>
                <div className="div-signin">
                    <p>New to Vamos? Create an account.</p>
                </div>
            </div>
        );
    }
}

export default LoginPage;