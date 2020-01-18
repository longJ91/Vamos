import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import MeetingPage from './components/MeetingPage';

class App extends Component {
    render() {
        window.Kakao.init("0ff66458bef2e0cd76aadc3562843c62"); 

        return(
            <div>
                <Route exact path='/' component={LoginPage}/>
                <Route exact path='/sign-up-page' component={SignUpPage}/>
                <Route exact path='/meeting-page' component={MeetingPage}/>
            </div>
        );
    }
}

export default App;