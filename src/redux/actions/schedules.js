import axios from "axios";

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
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/schedules")
      .then(res => dispatch(schedulesFetched(res.data)))
      .then(() => resolve())
      .catch(() => reject())
  })
};

const addSchedule = schedule => dispatch => {
  axios
    .post("http://localhost:3000/schedules", schedule)
    .then(res => dispatch(scheduleFetched(res.data)));
};

const scheduleDelete = id => dispatch => {
  axios
    .delete(`http://localhost:3000/schedules/${id}`)
    .then(res => dispatch(getSchedules()));
};

const scheduleEdit = schedule => dispatch => {
  axios
    .put(`http://localhost:3000/schedules/${schedule.id}`, schedule)
    .then(res => dispatch(getSchedules()));
};

export {
  SCHEDULE_FETCHED,
  SCHEDULES_FETCHED,
  scheduleFetched,
  schedulesFetched,
  getSchedules,
  addSchedule,
  scheduleEdit,
  scheduleDelete
};
