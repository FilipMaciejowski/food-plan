import { USER_FETCHED } from "../actions/user";

const user = (state = "", { type, payload }) => {
  switch (type) {
    case USER_FETCHED:
      return payload;

    default: {
      return state;
    }
  }
};

export default user;
