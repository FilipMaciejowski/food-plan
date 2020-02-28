import axios from "axios";

const ADD_SCHEDULE = "ADD_SCHEDULE";
const SCHEDULE_FETCHED = "SCHEDULE_FETCHED";
const SCHEDULES_FETCHED = "SCHEDULES_FETCHED";

const scheduleFetched = schedule => ({
  type: SCHEDULE_FETCHED,
  payload: schedule
});

const schedulesFetched = schedules => ({
  type: SCHEDULES_FETCHED,
  payload: schedules
});

const getSchedules = () => dispatch => {
  axios
    .get("http://localhost:3000/schedules")
    .then(res => dispatch(schedulesFetched(res.data)));
};

const addSchedule = schedule => dispatch => {
  axios
    .post("http://localhost:3000/schedules", schedule)
    .then(res => dispatch(scheduleFetched(res.data)));
};

export {
  ADD_SCHEDULE,
  SCHEDULE_FETCHED,
  SCHEDULES_FETCHED,
  scheduleFetched,
  schedulesFetched,
  getSchedules,
  addSchedule
};
