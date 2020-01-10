import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import MeetingList from './MeetingList';

class MeetingPage extends Component {

  getMeetingList = async (userId, groudId) => {

  }

  render() {
    return (
      <div>
        <div>모임 리스트</div>
        <MeetingList />
      </div>
    );
  }
}

export default MeetingPage;