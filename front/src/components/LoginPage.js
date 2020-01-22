import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LoginPageActions } from 'store/actionCreators';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './LoginPage.css'

import * as api from '../lib/api';


class LoginPage extends Component {
    // state = {
    //     email: '',
    //     pwd: ''
    // }

    postLogin = async (email, pwd) => {
        return await api.postLogin(email, pwd);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        // this.setState({
        //     [name]: value
        // });
        LoginPageActions.changeInput(name, value);
    }

    handleClick = () => {
        const { email, pwd } = this.props;

        this.postLogin(email, pwd)
        .then(response => {
            // 수정 필요
            console.log(response);
            localStorage.setItem("USER_ID", response.data);
            this.props.history.push('/meeting-page');
        }).catch(error => {
            if (error.response.status === 500) {
                alert(error.response.data.Error);
            } else {
                console.log(error.response.data);
            }
        });
    }

    componentDidMount(){
        
        window.Kakao.Auth.createLoginButton({
            container: "#kakao-login-btn",
            success: function(authObj) {
                    // 로그인 성공시, API를 호출합니다.
                    window.Kakao.API.request({
                    url: "/v2/user/me",
                    success: function(res) {
                        console.log(JSON.stringify(res));
                        api.postKakaoLogin(res.id, res.properties.nickname, '')
                        .then(response => {
                            // 수정 필요
                            console.log(response);
                            localStorage.setItem("USER_ID", response.data);
                            this.props.history.push('/meeting-page');
                        }).catch(error => {
                            if (error.response.status === 500) {
                                alert(error.response.data.Error);
                            } else {
                                console.log(error.response.data);
                            }
                        });
                    },
                    fail: function(error) {
                        console.log(JSON.stringify(error));
                    }
                });
            },
            fail: function(err) {
                alert(JSON.stringify(err));
            }
        });
    }

    render() {
        
        const { handleChange, handleClick } = this;

        return (
            <div className="div-login-page">
                <div className="div-logo">
                    <svg className="svg-logo"/>
                </div>
                <div className="div-email">
                    <TextField name="email" label="Email" variant="outlined" onChange={handleChange}/>
                </div>
                <div className="div-pwd">
                    <TextField type="password" name="pwd" label="Password" variant="outlined" onChange={handleChange}/>
                </div>
                <div className="div-button">
                    <Button variant="contained" color="primary" size="large" onClick={handleClick}>
                        로그인
                    </Button>
                </div>
                <div style={{textAlign: 'center'}}>
                    <a id="kakao-login-btn"></a>
                </div>
                <div className="div-signup">
                    <p>New to Vamos? <NavLink exact to="/sign-up-page" > Create an account.</NavLink></p>
                </div>
            </div>
        );
    }
}

// export default LoginPage;
export default connect(
    //store의 state 값을 props로 전달 받아 온다.
    ({ loginPage }) => ({
        email: loginPage.email,
        pwd: loginPage.pwd
    })
)(LoginPage);
