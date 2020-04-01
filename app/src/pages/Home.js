import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Row, Col, Modal, Container } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import history_icon from '../assets/history.svg';
import map_icon from '../assets/map-pin.svg';
import calendar_icon from '../assets/calendar.svg';

const HomeContainer = styled.div`
  padding: 2rem 0;

  .calendar-icon {
    cursor: pointer;
  }
`;

const CalendarContainer = styled.div`
  position: absolute;
  left: -60px;
  z-index: 3;
  display: ${props => props.isVisible ? 'block':'none'};
`;

const UserCard = styled.div`
  height: 120px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #E9E9E9;
  border-radius: 4px;
  opacity: 1;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 10px #16161629;
    transition-duration: 0.5s;
  }
}
`;

const UserImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 80px;
      border-radius: 100%;
    }
`;

const UserDetails = styled.div`
    h5 {
      color: #101010;
    }

    span {
      font-size: 15px;
      opacity: 0.7;
    }
`;

const ActivityLog = styled.div`
  padding: 1rem 0;
  border-bottom: 0.5px dashed #bbbbbb;

  &:last-child {
    border-bottom: none;
  }
`;

const ActivityTime = styled.div`
    font-size: 1rem;
    font-weight: 600;
`

const ActivityDate = styled.div`
    font-size: 0.8rem;
    color: #888
`

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
      userList: [],
      currentUserData: null,
      currentUserID: null,
      date: new Date(),
      isCalendarVisible: false
    }
  }

  onChange = date => {
    this.setState({ date });
    this.filterActivityByDate();
  }

  toggleCalendar = () => {
    this.setState({isCalendarVisible: !this.state.isCalendarVisible});
  }

  filterActivityByDate = () => {
    this.loadCurrentUserData(this.state.currentUserID);
    const { currentUserData, date } = this.state;
    let dateString = `${new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date).substr(0,3)} ${date.getDate()} ${date.getFullYear()}`;

    let filteredActivityData = currentUserData[0].formatted_activity.filter((data)=>{
      return data.date == dateString;
    });

    currentUserData[0].formatted_activity = filteredActivityData;
  }

  openModal = (userID) => {
    this.setState({ modalState: true, currentUserID: userID });
    this.loadCurrentUserData(userID);
  }

  loadCurrentUserData = (userID) => {
    const { userList } = this.state;
    // set the user data being accessed
    let newUserList = Object.assign([], userList);
    let currentUserData = newUserList.filter(data => data.id == userID);
    // console.log(currentUserData);
    let formattedActivityPeriods = currentUserData[0].activity_periods.map((data)=>{
      let { start_time, end_time } = data;
      let startTime = start_time.split("  ");
      let endTime = end_time.split("  ");

      return {
        date: startTime[0],
        start_time: startTime[1],
        end_time: endTime[1]
      }
    });

    currentUserData[0].formatted_activity = formattedActivityPeriods.reverse();

    this.setState({currentUserData: currentUserData});
  }

  closeModal = () => {
    this.setState({ modalState: false });
  }

  loadUserData = () => {
    return axios.get(`/GetUserList`)
    .then(res=>{
      return res.data;
    })
    .catch(err=>{
      console.log(err);
    });
  }

  componentDidMount = () => {
    // load user data
    this.loadUserData().then(data=>{
      if(data.ok == true)
        this.setState({userList: data.members});
    });
  }

  render() {
    const { modalState, userList, currentUserData, isCalendarVisible, date } = this.state;

    return(
      <HomeContainer>
        <Row>
          {
            userList.length ? userList.map(data=>(
              <Col sm={4}>
                <UserCard onClick={() => { this.openModal(data.id) } }>
                  <Row>
                    <Col sm={3}>
                      <UserImage>
                        <img src={data.image_url}/>
                      </UserImage>
                    </Col>
                    <Col sm={9} className="user-details">
                      <UserDetails>
                        <h5>{data.real_name}</h5>
                        <span><img src={map_icon}/> {data.tz}</span>
                        <br />
                        <span><img src={history_icon}/> {data.activity_periods[data.activity_periods.length-1].end_time}</span>
                      </UserDetails>
                    </Col>
                  </Row>
                </UserCard>
              </Col>
            )) : null
          }
        </Row>
      
        <Modal show={modalState} onHide={this.closeModal} animation={true}>
              <Modal.Body>
              {
                currentUserData!==null?currentUserData.map((data)=>(
                  <Container>
                      <Row>
                        <Col sm={3}>
                          <UserImage>
                            <img src={data.image_url}/>
                          </UserImage>
                        </Col>
                        <Col sm={9}>
                          <UserDetails>
                            <h5>{data.real_name}</h5>
                            <span><img src={map_icon}/> {data.tz}</span>
                          </UserDetails>
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                          <Col xs={4}>
                            <h5>Activity Log</h5>
                          </Col>
                          <Col xs={8} className="text-right">
                            <img src={calendar_icon} onClick={this.toggleCalendar} className="calendar-icon"/>
                            &nbsp; | &nbsp;<span onClick={()=>{this.loadCurrentUserData(this.state.currentUserID)}}>Load All</span>
                            <CalendarContainer isVisible={isCalendarVisible}>
                              <Calendar onChange={this.onChange} value={date} />
                            </CalendarContainer>
                          </Col>
                      </Row>
                      {
                        data.formatted_activity.length?data.formatted_activity.map((activity_data)=>(
                          <ActivityLog>
                            <Row>
                              <Col xs={12}>
                                <ActivityTime>
                                  {activity_data.start_time} - {activity_data.end_time}
                                </ActivityTime>
                              </Col>
                              <Col xs={12}>
                                <ActivityDate>
                                  {activity_data.date}
                                </ActivityDate>
                              </Col>
                            </Row>
                          </ActivityLog>
                        )):null
                      }
                  </Container>
                )):null
              }
              </Modal.Body>
        </Modal>
        
      </HomeContainer>
    );
  }  
}

export default Home;