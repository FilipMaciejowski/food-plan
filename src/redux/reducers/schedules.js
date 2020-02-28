import {
  SCHEDULE_FETCHED,
  ADD_SCHEDULE,
  SCHEDULE_PENDING
} from "../actions/schedules";

const initialState = {
  schedules: [],
  status: "Fetched"
};

const schedules = (state = initialState, { type, payload }) => {
  switch (type) {
    case SCHEDULE_FETCHED:
      return {
        ...state,
        status: "FETCHED"
      };
    case SCHEDULE_PENDING:
      return {
        ...state,
        status: "PENDING"
      };
    case ADD_SCHEDULE:
      return {
        ...state,
        schedules: payload
      };
    default: {
      return state;
    }
  }
};

export default schedules;
