import React, { Component } from 'react';

class MeetingListItem extends Component {
  render() {
    return (
      <div>
        <div>{ this.props.title }</div>
        <div>{ this.props.body }</div>
        <div>{ this.props.status }</div>
      </div>
    );
  }
}

export default MeetingListItem;