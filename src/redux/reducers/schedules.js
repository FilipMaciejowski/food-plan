import {SCHEDULE_FETCHED} from "../actions/schedules";

const schedules = (state = [], { type, payload }) => {
  switch (type) {
   case SCHEDULE_FETCHED:
    return [...state, payload];

    default: {
      return state;
    }
  }
};

export default schedules;
