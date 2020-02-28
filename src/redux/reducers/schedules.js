import { SCHEDULE_FETCHED, SCHEDULES_FETCHED } from "../actions/schedules";

const schedules = (state = [], { type, payload }) => {
  switch (type) {
    case SCHEDULE_FETCHED:
      return [...state, payload];

    case SCHEDULES_FETCHED:
      return [...payload];

    default: {
      return state;
    }
  }
};

export default schedules;
