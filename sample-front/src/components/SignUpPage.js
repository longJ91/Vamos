import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './SignUpPage.css'
import { NavLink } from 'react-router-dom';

import * as api from '../lib/api';

class SignUpPage extends Component {
    state = {
        email: '',
        pwd: '',
        name:''
    }

    // postLogin = async (email, pwd) => {
    //     // const result = await api.getTest();
    //     const result = await api.postLogin(email, pwd);
    //     console.log(result);
    // }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleClick = () => {
        const { email, pwd, name } = this.state;
        // this.postLogin(email, pwd);
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="div-signup-page">
                <div className="div-logo">
                    <svg className="svg-logo" />
                </div>
                <div className="div-email">
                    <TextField name="email" label="Email" variant="outlined" onChange={this.handleChange}/>
                </div>
                <div className="div-pwd">
                    <TextField name="pwd" label="Password" variant="outlined" onChange={this.handleChange}/>
                </div>
                <div className="div-name">
                    <TextField name="name" label="Name" variant="outlined" onChange={this.handleChange}/>
                </div>
                <div className="div-button">
                    <Button variant="contained" color="primary" size="large" onClick={this.handleClick}>
                        회원가입
                    </Button>
                </div>
                <div className="div-signin">
                    <p>Do you have a account? <NavLink exact to="/" > Go to the login page.</NavLink></p>
                </div>
            </div>
        );
    }
}

export default SignUpPage;