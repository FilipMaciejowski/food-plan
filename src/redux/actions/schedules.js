import axios from "axios";

export const ADD_SCHEDULE = "ADD_SCHEDULE";
export const SCHEDULE_FETCHED = "SCHEDULE_FETCHED";

export const scheduleFetched = schedule => ({
  type: SCHEDULE_FETCHED,
  payload: schedule
});


export const addSchedule = schedule => dispatch => {
  axios
  .post("http://localhost:3000/schedules", schedule)
  .then(res => dispatch(scheduleFetched(res.data)))
}
