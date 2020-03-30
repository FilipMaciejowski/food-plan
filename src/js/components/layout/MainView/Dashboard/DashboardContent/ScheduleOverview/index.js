import React, { Component } from "react";

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'saturday', 'sunday'];

class ScheduleOverview extends Component {

  state = {
    currentWeekIndex: null,
    weekIndex: null,
    currentSchedule: null,
    gotError: false,
  };

  componentDidMount() {
    const { getSchedules } = this.props;
    getSchedules().then(() => {
      this.calculateCurrentWeek();
      this.searchByWeekSchedules();
    }).catch(() => {
      this.setState({ gotError: true })
    })
  }

  calculateCurrentWeek() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    this.setState({
      currentWeekIndex: Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
    });
  }

  handleScheduleChange(direction) {
    const { currentWeekIndex } = this.state;
    if (direction === "previous" && currentWeekIndex > 1) {
      this.setState({
        currentWeekIndex: currentWeekIndex - 1,
      }, () => this.searchByWeekSchedules());
    }

    if (direction === "next" && currentWeekIndex < 52) {
      this.setState({
        currentWeekIndex: currentWeekIndex + 1,
      },() => this.searchByWeekSchedules());
    }

  }

  searchByWeekSchedules() {
    const { currentWeekIndex, currentSchedule } = this.state;
    const { schedules } = this.props;
    const setValueSchedules = value => {
      this.setState({
        currentSchedule: value,
      },() => {console.log(currentSchedule, 'sss')})
    };
    if (schedules) {
      let notFindSchedule = true;
      schedules.forEach((schedule, index) => {
        if (Number(schedule.weekNumber) === currentWeekIndex) {
          setValueSchedules(schedules[index]);
          notFindSchedule = false;
        }
      });
      if (notFindSchedule) {
        setValueSchedules(null)
      }
    } else {
      setValueSchedules(null);
    }
  }

  capitalize = word => {
    if (typeof word !== 'string') return '';
    return word.charAt(0).toUpperCase() + word.slice(1)
  };

  renderWeek(day) {
    const { currentSchedule } = this.state;
    const scheduleDay = currentSchedule[day];
    return (
      <>
        {scheduleDay.map(element => (
          <div className="schedule__overview-content-element">
            {element}
          </div>
        ))}
      </>
    )
  }

  renderSchedule() {
    return (
      <>
        {days.map(element => (
          <div className="schedule__overview-content-day">
            <div className="schedule__overview-content-element-title">
              {this.capitalize(element)}
            </div>
            {this.renderWeek(element)}
          </div>
        ))}
      </>
    )
  }

  render() {
    const { currentWeekIndex, currentSchedule, gotError } = this.state;
    return (
      <>
        <div className="schedule__overview-title">
          Your schedule for {currentWeekIndex} week:
        </div>
        {gotError
          ?
          <div className="schedule__overview-content-error">
            Error occurred, pleas refresh page
          </div>
          :
          <div className="schedule__overview-content-container">
            { currentSchedule ?
              <>
                {this.renderSchedule()}
              </>
              :
              <div className="schedule__overview-content-message">
                You didn't add schedule for this week
              </div>
            }
          </div>
        }
        <div className="schedule__overview-content-nav">
          <div
            className="schedule__overview-content-nav-element prev"
            onClick={() => this.handleScheduleChange("previous")}
          >
            <span>&laquo;</span>
            <span className="schedule__overview-content-spanBtn">Previous week</span>
          </div>
          <div
            className="schedule__overview-content-nav-element next"
            onClick={() => this.handleScheduleChange("next")}
          >
            <span className="schedule__overview-content-spanBtn">Next week</span>
            <span>&raquo;</span>
          </div>
        </div>
      </>
    );
  }
}

export default ScheduleOverview;
