import React, { Component } from 'react';
import MeetingListItem from './MeetingListItem';

class MeetingList extends Component {
  render() {
    return (
      <div>
        <MeetingListItem />
        <MeetingListItem />
        <MeetingListItem />
      </div>
    );
  }
}

export default MeetingList;