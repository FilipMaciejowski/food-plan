import { combineReducers } from "redux";

import user from "./user";
import recipe from "./recipe";
import schedule from "./schedule";

export default combineReducers({
  user,
  recipe,
  schedule
});
