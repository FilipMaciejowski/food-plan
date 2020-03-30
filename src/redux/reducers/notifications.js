import { CHANGE_NOTIFICATIONS_STATUS } from "../actions/notifications";

const initialState = {
  info: true,
  warning: true,
  message: true,
};

const notifications = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_NOTIFICATIONS_STATUS:
      return [...payload];
    default: {
      return state;
    }
  }
};

export default notifications;
