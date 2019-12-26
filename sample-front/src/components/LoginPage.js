import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './LoginPage.css'

class LoginPage extends Component {
    render() {
        return (
            <div className="div-login-page">
                <div className="div-email">
                    <TextField id="outlined-Email" label="Email" variant="outlined" />
                </div>
                <div className="div-password">
                    <TextField id="outlined-Password" label="Password" variant="outlined" />
                </div>
                <div className="div-button">
                    <Button variant="contained" color="primary">
                        로그인
                    </Button>
                </div>
            </div>
        );
    }
}

export default LoginPage;