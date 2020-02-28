import axios from "axios";

export const ADD_SCHEDULE = "ADD_SCHEDULE";
export const SCHEDULE_FETCHED = "SCHEDULE_FETCHED";
export const SCHEDULE_PENDING = "SCHEDULE_PENDING";

export const addSchedule = schedule => dispatch => {
  dispatch({ type: SCHEDULE_PENDING });
  axios
    .post("http://localhost:3000/schedules", schedule)
    .then(res => {
      console.log(res, schedule, "hehehehe");
      dispatch({
        type: ADD_SCHEDULE,
        schedule
      });
    })
    .then(res => dispatch({ type: SCHEDULE_FETCHED }));
};

export const getSchedules = () => dispatch => {
  dispatch({ type: SCHEDULE_PENDING });
  axios.get("http://localhost:3000/schedules").then(res => {
    dispatch({ type: ADD_SCHEDULE, payload: res.data });
    dispatch({ type: SCHEDULE_FETCHED });
  });
};


