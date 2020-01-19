import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = theme => ({
  meetingItem: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
});

class MeetingListItem extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.meetingItem} mx="auto" p={1} m={1}>
        <Card>
          <CardContent>
            <Typography>{ this.props.title }</Typography>
            <Typography>{ this.props.body }</Typography>
            <Typography>{ this.props.status }</Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default withStyles(styles)(MeetingListItem);