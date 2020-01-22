import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MeetingPage from './meeting/MeetingPage';
import ErrorBoundary from './ErrorBoundary';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

class App extends Component {
    render() {
        window.Kakao.init("0ff66458bef2e0cd76aadc3562843c62"); 
        const { classes } = this.props; 

        return(
            <ErrorBoundary>
                <div className={classes.root}>
                    <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                        Vamos 
                        </Typography>
                        <Button color="inherit">BUTTON</Button>
                    </Toolbar>
                    </AppBar>
                    <div>
                        <Route exact path='/' component={LoginPage}/>
                        <Route exact path='/sign-up-page' component={SignUpPage}/>
                        <Route exact path='/meeting-page' component={MeetingPage}/>
                    </div>
                </div>
            </ErrorBoundary>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

