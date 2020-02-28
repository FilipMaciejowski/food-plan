import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const ScheduleOverview = ({schedules}) => {
  const [currentSchedule, setCurrentSchedule] = useState(null);
  useEffect(() => {
    if (schedules) {
      setIndex();
    }
  }, [schedules]);


  const weekOfYear = require("dayjs/plugin/weekOfYear");
  dayjs.extend(weekOfYear);
  const currentWeek = dayjs(new Date()).week();
  const setIndex = () => {
    schedules.forEach(schedule => {
        if (Number(schedule.weekNumber) === currentWeek) {
          setCurrentSchedule(schedule);
        }
      });
  };
    return (
      <>
        <div className="schedule__overview-title">
          Twój plan na {currentWeek} tydzień:
        </div>
        {currentSchedule ? (
            <div className="schedule__overview-content-container">
              <div className="schedule__overview-content-day">
                <div className="schedule__overview-content-element-title">
                  Poniedziałek
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.monday[0]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.monday[1]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.monday[2]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.monday[3]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.monday[4]}
                </div>
              </div>
              <div className="schedule__overview-content-day">
                <div className="schedule__overview-content-element-title">
                  Wtorek
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.tuesday[0]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.tuesday[1]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.tuesday[2]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.tuesday[3]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.tuesday[4]}
                </div>
              </div>
              <div className="schedule__overview-content-day">
                <div className="schedule__overview-content-element-title">
                  Środa
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.wednesday[0]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.wednesday[1]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.wednesday[2]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.wednesday[3]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.wednesday[4]}
                </div>
              </div>
              <div className="schedule__overview-content-day">
                <div className="schedule__overview-content-element-title">
                  Czwartek
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.thrusday[0]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.thrusday[1]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.thrusday[2]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.thrusday[3]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.thrusday[4]}
                </div>
              </div>
              <div className="schedule__overview-content-day">
                <div className="schedule__overview-content-element-title">
                  Piątek
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.friday[0]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.friday[1]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.friday[2]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.friday[3]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.friday[4]}
                </div>
              </div>
              <div className="schedule__overview-content-day">
                <div className="schedule__overview-content-element-title">
                  Sobota
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.saturday[0]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.saturday[1]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.saturday[2]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.saturday[3]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.saturday[4]}
                </div>
              </div>
              <div className="schedule__overview-content-day">
                <div className="schedule__overview-content-element-title">
                  Niedziela
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.sunday[0]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.sunday[1]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.sunday[2]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.sunday[3]}
                </div>
                <div className="schedule__overview-content-element">
                  {currentSchedule.sunday[4]}
                </div>
              </div>
            </div>
          )
          :
          <div>Jesz co chcesz !!! :)</div>
        }
        <div className="schedule__overview-content-nav">
          <div className="schedule__overview-content-nav-element prev">
            <span>&laquo;</span>
            <span>poprzedni</span>
          </div>
          <div className="schedule__overview-content-nav-element next">
            <span>następny</span>
            <span>&raquo;</span>
          </div>
        </div>
      </>
    );
};
export default ScheduleOverview;