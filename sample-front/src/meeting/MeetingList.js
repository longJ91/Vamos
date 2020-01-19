import React, { Component } from 'react';
import MeetingListItem from './MeetingListItem';

class MeetingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        meetings: []
    };
  }

  loadMeetingList() {
    // test
    const MeetingList = [
      {
        title : "NEO 1월 신년회 모임",
        body : "서울만날 차례 이번달 생일자 2인있음",
        status : "투표 진행 중"
      },
      {
        title : "의리의리",
        body : "훠궈의리",
        status : "투표 완료"
      },
      {
        title : "SVP 망년회",
        body : "망포역 7번출구 6시",
        status : "확정"
      }
    ]
    
    this.setState({
      meetings : MeetingList
    });
  }

  componentDidMount() {
    this.loadMeetingList();
  }

  render() {
    const meetingViews = [];
    this.state.meetings.forEach((meeting, meetingIndex) => {
      meetingViews.push(<MeetingListItem
        key={meetingIndex}
        title={meeting.title}
        body={meeting.body}
        status={meeting.status}
      />);
    });

    return (
      <div>
        {meetingViews}
      </div>
    );
  }
}

export default MeetingList;