import React, { Component } from "react";
import dayjs from "dayjs";

const weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekOfYear);

class ScheduleOverview extends Component {
  state = {
    currentWeekIndex: null
  };

  componentDidMount() {
    const { getSchedules } = this.props;
    getSchedules();
  }

  componentDidUpdate() {
    const { currentWeekIndex } = this.state;
    if (currentWeekIndex === null) {
      const currentWeek = dayjs(new Date()).week();

      const { schedules } = this.props;

      const index = schedules
        .map(schedule => {
          return schedule.weekNumber;
        })
        .indexOf(currentWeek);

      if (index !== -1) {
        this.setState({ currentWeekIndex: index });
      } else {
        if (schedules.length === 0) {
          this.setState({ currentWeekIndex: null });
        } else {
          if (schedules.length === 1) {
            this.setState({ currentWeekIndex: 0 });
          } else {
            const nextIndex = schedules
              .map(schedule => {
                return schedule.weekNumber;
              })
              .findIndex(index => {
                return index > currentWeek;
              });

            if (nextIndex !== -1) {
              this.setState({ currentWeekIndex: nextIndex });
            }
          }
        }
      }
    }
  }

  handleScheduleChange(direction) {
    const { schedules } = this.props;
    const { currentWeekIndex } = this.state;

    if (schedules.length === 1) {
      return;
    }

    if (direction === "previous") {
      if (currentWeekIndex === 0) {
        return;
      } else {
        if (typeof schedules[currentWeekIndex] - 1 === "undefined") {
          return;
        } else {
          this.setState({ currentWeekIndex: currentWeekIndex - 1 });
        }
      }
    }

    if (direction === "next") {
      if (currentWeekIndex === schedules.length - 1) {
        return;
      } else {
        if (typeof schedules[currentWeekIndex] + 1 === "undefined") {
          return;
        } else {
          this.setState({ currentWeekIndex: currentWeekIndex + 1 });
        }
      }
    }
  }

  render() {
    const { schedules } = this.props;
    const { currentWeekIndex } = this.state;

    if (currentWeekIndex === null) {
      return null;
    } else {
      const { currentWeekIndex } = this.state;

      return (
        <>
          <div className="schedule__overview-title">
            Twój plan na {schedules[currentWeekIndex].weekNumber} tydzień:
          </div>
          <div className="schedule__overview-content-container">
            <div className="schedule__overview-content-day">
              <div className="schedule__overview-content-element-title">
                Poniedziałek
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].monday[0]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].monday[1]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].monday[2]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].monday[3]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].monday[4]}
              </div>
            </div>
            <div className="schedule__overview-content-day">
              <div className="schedule__overview-content-element-title">
                Wtorek
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].tuesday[0]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].tuesday[1]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].tuesday[2]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].tuesday[3]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].tuesday[4]}
              </div>
            </div>
            <div className="schedule__overview-content-day">
              <div className="schedule__overview-content-element-title">
                Środa
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].wednesday[0]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].wednesday[1]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].wednesday[2]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].wednesday[3]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].wednesday[4]}
              </div>
            </div>
            <div className="schedule__overview-content-day">
              <div className="schedule__overview-content-element-title">
                Czwartek
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].thrusday[0]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].thrusday[1]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].thrusday[2]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].thrusday[3]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].thrusday[4]}
              </div>
            </div>
            <div className="schedule__overview-content-day">
              <div className="schedule__overview-content-element-title">
                Piątek
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].friday[0]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].friday[1]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].friday[2]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].friday[3]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].friday[4]}
              </div>
            </div>
            <div className="schedule__overview-content-day">
              <div className="schedule__overview-content-element-title">
                Sobota
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].satruday[0]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].satruday[1]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].satruday[2]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].satruday[3]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].satruday[4]}
              </div>
            </div>
            <div className="schedule__overview-content-day">
              <div className="schedule__overview-content-element-title">
                Niedziela
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].sunday[0]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].sunday[1]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].sunday[2]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].sunday[3]}
              </div>
              <div className="schedule__overview-content-element">
                {schedules[currentWeekIndex].sunday[4]}
              </div>
            </div>
          </div>
          <div className="schedule__overview-content-nav">
            <div
              className="schedule__overview-content-nav-element prev"
              onClick={() => this.handleScheduleChange("previous")}
            >
              <span>&laquo;</span>
              <span>poprzedni</span>
            </div>
            <div
              className="schedule__overview-content-nav-element next"
              onClick={() => this.handleScheduleChange("next")}
            >
              <span>następny</span>
              <span>&raquo;</span>
            </div>
          </div>
        </>
      );
    }
  }
}

export default ScheduleOverview;
