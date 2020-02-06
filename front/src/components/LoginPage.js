import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LoginPageActions } from 'store/actionCreators';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KakaoLogin from 'react-kakao-login';

import './LoginPage.css'

import * as api from '../lib/api';

const KAKAO_JAVASCRIPT_KEY = '0ff66458bef2e0cd76aadc3562843c62';

class LoginPage extends Component {
    // state = {
    //     email: '',
    //     pwd: ''
    // }

    postLogin = async (email, pwd) => {
        return await api.postLogin(email, pwd);
    }

    postKakaoLogin = async (userId, kakaoName, email) => {
        return await api.postKakaoLogin(userId, kakaoName, email);
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

    handleKakaoLogin = (response) => {
        console.log(response);
        this.postKakaoLogin(response.profile.id, response.profile.properties.nickname, '')
        .then(response => {
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

    componentDidMount() {

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
                <div className="div-button">
                    <KakaoLogin
                        jsKey={KAKAO_JAVASCRIPT_KEY}
                        onSuccess={result => this.handleKakaoLogin(result)}
                        onFailure={result => console.log(result)}
                        render={(props) => (
                            <Button onClick={props.onClick}>카카오계정으로 로그인하기</Button>
                        )}
                        getProfile={true}
                    />
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
