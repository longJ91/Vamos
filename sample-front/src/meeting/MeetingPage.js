import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import MeetingList from './MeetingList';

const styles = theme => ({
  content: {
    backgroundColor: '#ededed',
  },
  addIcon: {
    position: 'absolute',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
});

class MeetingPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="sm">
        <Box m={2}>
          <Typography component="div" className={classes.content}>
            <div>모임 리스트</div>
            <MeetingList />
            <Fab className={classes.addIcon} color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Typography>
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles)(MeetingPage);