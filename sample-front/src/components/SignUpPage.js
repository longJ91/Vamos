import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SignUpPageActions } from 'store/actionCreators';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './SignUpPage.css'

import * as api from '../lib/api';

class SignUpPage extends Component {
    // state = {
    //     email: '',
    //     pwd: '',
    //     name:''
    // }

    getDuplicateEmail = async (email) => {
        const result = await api.getDuplicateEmail(email);
        console.log(result);
    }

    postSignUp = async (email, pwd, name) => {
        return await api.postSignUp(email, pwd, name);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        SignUpPageActions.changeInput(name, value);
    }

    handleClick = () => {
        const { email, pwd, name } = this.props;

        const validation = this.getDuplicateEmail(email);
        if (validation) {
            this.postSignUp(email, pwd, name)
            .then(response => {
                this.props.history.push('/');
            }).catch(error => {
                if (error.response.status === 500) {
                    alert(error.response.data.Error);
                } else {
                    console.log(error.response);
                }
            });
        } else {
            console.log(`Email isn't validation`)
        }
    }

    componentDidMount(){
        
    }

    render() {
        const { handleChange, handleClick } = this;

        return (
            <div className="div-signup-page">
                <div className="div-logo">
                    <svg className="svg-logo" />
                </div>
                <div className="div-email">
                    <TextField name="email" label="Email" variant="outlined" onChange={handleChange}/>
                </div>
                <div className="div-pwd">
                    <TextField type="password" name="pwd" label="Password" variant="outlined" onChange={handleChange}/>
                </div>
                <div className="div-name">
                    <TextField name="name" label="Name" variant="outlined" onChange={handleChange}/>
                </div>
                <div className="div-button">
                    <Button variant="contained" color="primary" size="large" onClick={handleClick}>
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

// export default SignUpPage;
export default connect(
    //store의 state 값을 props로 전달 받아 온다.
    ({ signUpPage }) => ({
        email: signUpPage.email,
        pwd: signUpPage.pwd,
        name: signUpPage.name
    })
)(SignUpPage);