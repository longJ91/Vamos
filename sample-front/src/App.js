import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'

class App extends Component {
    render() {
        return(
            <div>
                <Route exact path='/' component={LoginPage}/>
                <Route exact path='/sign-up-page' component={SignUpPage}/>
            </div>
        );
    }
}

export default App;