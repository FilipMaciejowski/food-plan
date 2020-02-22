import { combineReducers } from "redux";

import user from "./user";
import recipes from "./recipes";
import schedules from "./schedules";

export default combineReducers({
  user,
  recipes,
  schedules
});
